const botox = require('@botox/botox');
const dialogFlow = require('@botox/ai-dialogflow');
const slack = require('@botox/integration-slack');

const bot = botox
	.ai(dialogFlow({}))
	.integrations([
		slack({})
	])
	.train()
	.conversion()
	.init();


