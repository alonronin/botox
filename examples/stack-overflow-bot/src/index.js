const botox = require('@botox/botox');
const ai = require('@botox/ai-dialogflow');
const slack = require('@botox/integration-slack');

botox.ai(ai({})).integrations([slack({})]);
