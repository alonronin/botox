const botox = require('@botox/botox');
const dialogFlow = require('@botox/ai-dialogflow');
const slack = require('@botox/integration-slack');

(async () => {
  const bot = botox
    .ai(
      dialogFlow({
        username: 'alon',
        language: 'en-US'
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
    .conversion()
    .init();

  const result = await bot.ask('Hey');

  console.log(result);
})();
