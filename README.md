BotoX
===

![](./botox.png)

> Make your bots pretty with some BotoX.

Install
---

```bash
$ yarn add @botox-sdk/botox
```

AI Engines
---

- DialogFlow

```bash
$ yarn add @botox-sdk/ai-dialogflow
```

Integrations
---

- Slack

```bash
$ yarn add @botox-sdk/integration-slack
```

Usage
---

Just import your AI Engine, Integrations, if you have them, The BotoX lib and that's it:

```js
const Botox = require('@botox-sdk/botox');
const dialogFlow = require('@botox-sdk/ai-dialogflow');
const slack = require('@botox-sdk/integration-slack');

const engine = dialogFlow({
    path: resolve(__dirname, 'credentials.json'),
    projectId: 'project-id',
    languageCode: 'en-US'
  });

  const integrations = [
    slack({
      token: 'v0EOTAGMUquQIVIUUCteFeKX'
    })
  ];
  
  const bot = new Botox({
      engine,
      actions,
      integrations
    });
  
  const result = await bot.ask('Hey');
```
