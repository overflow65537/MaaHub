# ExpressionRecognition 表达式识别

自定义识别器：在 pipeline 里用 `{节点名}` 引用其他节点的 OCR 数值，通过表达式做算术与逻辑比较，结果为 `true` 时识别命中。

## 功能

- 引用其他 pipeline 节点的 OCR 数值参与计算
- 支持算术、比较与逻辑表达式
- 适用场景：当前值是否达标、多路 OCR 数值加权求和后再判断等

## 文件说明

- `ExpressionRecognition.py`：识别器实现
- `pipeline.json`：最小 pipeline 示例

## 使用方式

先准备 OCR 数值节点，再在 Custom 识别节点中引用：

```
"OCR-当前数值": {
        "recognition": "OCR",
        "expected": ["^\\d*$"],
        "roi": [100, 200, 80, 40],
        "only_rec": true
    },
    "OCR-目标数值": {
        "recognition": "OCR",
        "expected": ["^\\d*$"],
        "roi": [100, 100, 80, 40],
        "only_rec": true
    },
    "数值达标判断": {
        "recognition": "Custom",
        "custom_recognition": "ExpressionRecognition",
        "custom_recognition_param": {
            "expression": "{OCR-当前数值}>={OCR-目标数值}"
        },
        "next": ["下一步节点"]
    }
```

多节点加权示例：

```
"加权分数计算": {
        "recognition": "Custom",
        "custom_recognition": "ExpressionRecognition",
        "custom_recognition_param": {
            "expression": "{OCR-当前数值}*{OCR-倍率A}+{OCR-目标数值}*{OCR-倍率B}>={OCR-目标数值}"
        }
    }
```

`custom_recognition_param` 参数：

- `expression`：表达式字符串，`{节点名}` 为占位符，运行时对该节点 OCR 并提取第一个数字

表达式语法：

- **占位符**：`{节点名}`，支持整数与小数
- **运算符**：`+` `-` `*` `/` `%`，比较 `>` `>=` `<` `<=` `==` `!=`，逻辑 `&&` `||` `!`
- **返回值**：表达式必须求值为布尔值；为 `true` 时识别命中

完整示例见同目录 `pipeline.json`。

## 依赖

- Python 3.12+
- MaaFramework Agent SDK（`maa.custom_recognition`）

## 注意事项

- `custom_recognition` 需与 agent 中注册的识别名一致
- 被引用的节点需能 OCR 出数字文本
- 若节点使用 `And` 等多结果识别，可在该节点配置 `box_index` 指定取第几个子结果
- 识别 `detail` 中包含 `status`、`resolved_expression`、`resolved_values` 等调试信息
