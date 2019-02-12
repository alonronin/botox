const Botox = require('@botox/botox');
const dialogFlow = require('@botox/ai-dialogflow');
const slack = require('@botox/integration-slack');
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
