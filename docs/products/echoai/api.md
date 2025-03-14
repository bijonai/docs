# EchoAI API Reference

> Tips: 因为EchoAI基于我们的开源前端引擎[Sciux](https://sciux.dev)开发，所以我们推荐在实际应用中请求我们的JavaScript SDK, 这个SDK封装了所有API接口和Sciux的自动化处理和渲染。

## Base URL

如果你使用的是我们官方的API, 那么你的Base URL应该是:

```
https://api.bijon.ai/v1
```

## Request Headers

Example:

```shell
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  https://api.bijon.ai/v1/
```

请访问[Platform平台](https://platform.bijon.ai)获取你的API Key

## Request Body

Example:

```shell
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "service": "echo-v1",
    "chat_id": "114514",
    "ask": "The ask from the user",
    "lesson_design": "The lesson designs",
    "achievement": [
      {
        "name": "achievement 1",
        "desription": "The description",
        "judge_prompt": "The prompt provide to LLM to judge whether the user get the achievement",
      }
    ],
    "components_context": [
      {
        "tag": "the-tag-name",
        "attributes": { "the-attribute-name": "the-attribute-value" },
        "content": "the-content"
      }
    ],
    
  }' \
  https://api.bijon.ai/v1/
```

