const { RTMClient } = require('@slack/client');

module.exports = config => async bot => {
	// integration code

	console.log(config);

	const rtm = new RTMClient(config.token);
	rtm.start();

	rtm.on('message', async message => {
		// For structure of `message`, see https://api.slack.com/events/message

		// Skip messages that are from a bot or my own user ID
		if ( (message.subtype && message.subtype === 'bot_message') ||
			(!message.subtype && message.user === rtm.activeUserId) ) {
			return;
		}

		try {
			const result = await bot.ask(message.text);
			const response = await rtm.sendMessage(result, message.channel);

			console.log('slack', response);
		} catch (e) {
			console.error(e)
		}

	});
};
