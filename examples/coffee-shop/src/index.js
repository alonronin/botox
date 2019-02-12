const botox = require('@botox/botox');
const dialogFlow = require('@botox/ai-dialogflow');
const slack = require('@botox/integration-slack');
const { resolve } = require('path');

(async () => {
  const bot = botox
    .ai(
      dialogFlow({
        path: resolve('./src/credentials.json'),
        projectId: 'coffee-shop-b810a',
        languageCode: 'en-US'
      })
    )
    .integrations([
      slack({
        clientId: 'Tikal',
        clientSecret: 'secret',
        token: 'token'
      })
    ])
    .train()
    .actions({
      'input.welcome': async response => response.fulfillmentText
    })
    .init();

  const result = await bot.ask('Hey');

  console.log(result);
})();
