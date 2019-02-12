const Botox = require('@botox-sdk/botox');
const dialogFlow = require('@botox-sdk/ai-dialogflow');
const slack = require('@botox-sdk/integration-slack');
const { resolve } = require('path');

(async () => {
  const bot = new Botox()
    .engine(
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
    .actions({
      'input.welcome': async response => response.fulfillmentText
    })
    .init();

  const result = await bot.ask('Hey');

  console.log(result);
})();
