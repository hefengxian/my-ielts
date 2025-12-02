# 说明

由于词汇的输入主要来源于手打，为了方便手工输入做成了特殊格式 `vocabulary.txt`。但是最终页面上使用的是 `vocabulary.js`，其中的提取和转换通过 `parser.py` 实现。修改、编辑词汇的流程如下：

1. 编辑 `vocabulary.txt`
2. 执行（先切换目录到当前目录）提取和转换 `python parser.py`，自动生成 `vocabulary.js` 文件，不要手工编辑 `vocabulary.js` 文件