let _ai;

const botox = {
	ai(ai) {
		_ai = ai(this);
		return this;
	},
	integrations(arr) { return this; },
	conversion() { return this; },
	train() { return this; },
	init() {
		return {
			 ask: async (str) => {
				return await _ai.ask(str);
			}
		}
	}
};

module.exports = botox;
