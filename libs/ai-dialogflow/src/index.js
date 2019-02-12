const dialogflow = require('dialogflow');

module.exports = ({ path, projectId, languageCode }) => sdk => {
	// AI Code

	process.env.GOOGLE_APPLICATION_CREDENTIALS = path;

	const sessionId = sdk.sessionId;
	const sessionClient = new dialogflow.SessionsClient();
	const session = sessionClient.sessionPath(projectId, sessionId);

	return {
		async ask(str) {
			const request = {
				session,
				queryInput: {
					text: {
						text: str,
						languageCode,
					},
				},
			};

			const [response] = await sessionClient.detectIntent(request);

			console.log('ai-dialogflow', response);

			if(sdk.actions[response.queryResult.action]) {
				return await sdk.actions[response.queryResult.action](response.queryResult);
			}

			return response.queryResult.fulfillmentText;
		}
	}
};
