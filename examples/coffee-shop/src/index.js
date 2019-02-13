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

  const integrations = [
    slack({
      token: process.env.SLACK_TOKEN
    })
  ];

  const actions = {
    'input.welcome': async response => response.fulfillmentText,
    'order.drink': async response => response.fulfillmentText,
    'delivery-pickup': async response => response.fulfillmentText,
    'size': async response => response.fulfillmentText,
    'drink': async response => response.fulfillmentText,
    'order.gift_card': async response => response.fulfillmentText,
    'order.last': async response => response.fulfillmentText,
    'order.snack': async response => response.fulfillmentText,
    'order.drink.decline': async response => response.fulfillmentText,
    'input.unknown': async response => response.fulfillmentText,
    'order.drink.confirm': async response => response.fulfillmentText,
    'order.drink.different_card': async response => response.fulfillmentText
  };

  const bot = new Botox({
    engine,
    actions,
    integrations
  });

  try {

  } catch (e) {
    // const result = await bot.ask('Hey');
    // console.log(result);
  }
})();
