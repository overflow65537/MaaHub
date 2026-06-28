# thresholds.size() != expected.size()：override 改列表长度时的修复

> **适用范围**：不只 NeuralNetworkDetect。凡识别参数里 `threshold` 会与某个列表字段等长扩展、逐项对应的，override 时改列表长度都可能踩坑。TemplateMatch（`template`）、OCR 等也有同类风险。

## 报错现象

任务启动时 `post_task` 失败，`override_pipeline` 阶段解析节点报错：

``` log
[ERR] PipelineParser.cpp parse_nn_detector_param
      thresholds.size() != expected.size()
      [output.thresholds.size()=13] [output.expected.size()=1]

[ERR] PipelineParser.cpp parse_node
      failed to parse_recognition [input={"expected":[15]}]

[ERR] Context.cpp override_pipeline_once
      parse_task failed [key=NNDetect-选项-优先级_2] [value={"expected":[15]}]

[ERR] Tasker.cpp post_task
      failed to override_pipeline [task_ptr->entry()=任务入口节点]
```

**直接原因**：override 只写了 `{"expected":[15]}`，列表被替换成 1 个元素，但 `threshold` 仍继承原节点的 13 个元素，长度校验失败。

**触发 override**（节选）：

```json
"pipeline_override": {
    "NNDetect-选项-优先级_1": { "expected": [19] },
    "NNDetect-选项-优先级_2": { "expected": [15] }
}
```

---

## 原因：override 的替换与继承规则

`pipeline_override` 对字段是**整段替换**，未写明的字段**继承原节点**。原节点加载时框架已把标量 `threshold` 扩展成与列表等长的数组；override 只改写了列表，继承下来的 `threshold` 不会自动跟着变。

### **原节点（正常）**

```json
"NNDetect-选项-优先级_2": {
    "recognition": {
        "type": "NeuralNetworkDetect",
        "param": {
            "model": "best.onnx",
            "expected": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        }
    }
}
```

| 字段 | 实际值 |
|------|--------|
| `expected` | 13 个 |
| `threshold` | 13 个（由默认 `0.3` 自动扩展） |

### **override 只改 expected**

```json
"NNDetect-选项-优先级_2": { "expected": [15] }
```

| 字段 | override 后的值 |
|------|----------------|
| `expected` | `[15]` → **1 个**（整段替换） |
| `threshold` | 13 个 → **继承，未变** |

→ `thresholds.size() != expected.size()`，解析失败。

---

## 推荐做法

### 方案一（优先）：interface 只改目标，不改数量

前端 / interface 通过 `pipeline_override` 定制节点时，只替换要用的那一项，**保持列表长度与原节点一致**（如 `expected`、`template` 等），继承的 `threshold` 仍能对上。

### 方案二：确实要改变列表长度时，手动带上 threshold

override 里**显式写出**与新列表等长的 `threshold`（标量即可，框架会重新扩展）：

```json
"NNDetect-选项-优先级_2": {
    "expected": [15],
    "threshold": 0.3
}
```

若原节点用了非默认阈值，应写相同标量，或写齐与新列表等长的 threshold 数组。批量 override 时，每一个改了列表长度却没写 `threshold` 的节点都要补全。
