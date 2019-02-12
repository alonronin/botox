module.exports = config => sdk => {
	// AI Code
	console.log(sdk.ai.toString());

	return {
		async ask(str) {
			// dialogFlow.getIntent(str)
			return 'Do you want to order a drink?'
		}
	}
};
