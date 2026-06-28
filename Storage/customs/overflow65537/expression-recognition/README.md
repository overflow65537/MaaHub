# ExpressionRecognition 表达式识别

自定义识别器：在 pipeline 里用 `{节点名}` 引用其他节点的 OCR 数值，通过表达式做算术与逻辑比较，结果为 `true` 时识别命中。

适用场景：当前值是否达标、多路 OCR 数值加权求和后再判断等，不必为每种组合单独写节点。

## 文件说明

| 文件 | 说明 |
|------|------|
| `ExpressionRecognition.py` | 识别器实现 |
| `pipeline.json` | 最小 pipeline 示例 |
| `maahub_meta.json` | MaaHub 元信息 |

## 注册方式

将 `ExpressionRecognition.py` 放入 agent 工程，在 agent 入口注册：

```python
from maa.agent.agent_server import AgentServer
from ExpressionRecognition import ExpressionRecognition

@AgentServer.custom_recognition("ExpressionRecognition")
class Agent_ExpressionRecognition(ExpressionRecognition):
    pass
```

注册名 `"ExpressionRecognition"` 需与 pipeline 中 `custom_recognition` 字段一致。

## Pipeline 用法

在节点上使用 `Custom` 识别，通过 `custom_recognition_param.expression` 传入表达式：

```json
"数值达标判断": {
    "recognition": {
        "type": "Custom",
        "param": {
            "custom_recognition": "ExpressionRecognition",
            "custom_recognition_param": {
                "expression": "{OCR-当前数值}>={OCR-目标数值}"
            }
        }
    },
    "next": ["下一步节点"]
}
```

多节点加权示例：

```json
"加权分数计算": {
    "recognition": {
        "type": "Custom",
        "param": {
            "custom_recognition": "ExpressionRecognition",
            "custom_recognition_param": {
                "expression": "{OCR-当前数值}*{OCR-倍率A}+{OCR-目标数值}*{OCR-倍率B}>={OCR-目标数值}"
            }
        }
    }
}
```

完整可运行示例见同目录 `pipeline.json`。

## 表达式语法

- **占位符**：`{节点名}`，运行时对该节点执行识别，从 OCR 结果中提取第一个数字（支持整数与小数）
- **运算符**：`+` `-` `*` `/` `%`，比较 `>` `>=` `<` `<=` `==` `!=`，逻辑 `&&` `||` `!`（会转换为 Python 的 `and` / `or` / `not`）
- **返回值**：表达式必须求值为 **布尔值**；为 `true` 时返回固定 box `(0, 0, 100, 100)` 表示命中

被引用的节点需能 OCR 出数字文本。若节点使用 `And` 等多结果识别，可在该节点配置 `box_index` 指定取第几个子结果。

## 识别结果 detail

`detail` 中包含调试信息，便于排查：

| 字段 | 含义 |
|------|------|
| `status` | `success` / `expression evaluated to false` / `invalid expression` 等 |
| `expression` | 原始表达式 |
| `resolved_expression` | 占位符替换后的表达式 |
| `resolved_values` | 各占位符解析出的数值 |
| `node_results` | 各引用节点的识别摘要 |
| `summary` | 上述信息的可读文本 |

## 依赖

- Python 3.12+
- MaaFramework Agent SDK（`maa.custom_recognition`）
