const Botox = require('@botox-sdk/botox');
const dialogFlow = require('@botox-sdk/ai-dialogflow');
const slack = require('@botox-sdk/integration-slack');
const { resolve } = require('path');

(async () => {
  const engine = dialogFlow({
    path: resolve('./src/credentials.json'),
    projectId: 'coffee-shop-b810a',
    languageCode: 'en-US'
  });

  const integrations =[slack({
    token: 'xoxb-2341365858-548649920067-zGbNCS1FcjmctyVkn63OoRep'
  })];

  const actions = {
    'input.welcome': async response => response.fulfillmentText
  };

  const bot = new Botox({
    engine,
    actions,
    integrations
  });

  // const result = await bot.ask('Hey');
  //
  // console.log(result);
})();
