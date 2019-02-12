const dialogflow = require('dialogflow');
const uuid = require('uuid');

module.exports = ({ path, projectId, languageCode }) => sdk => {
	// AI Code

	process.env.GOOGLE_APPLICATION_CREDENTIALS = path;

	const sessionId = uuid.v4();
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

			return await sdk._actions[response.queryResult.action](response.queryResult);
		}
	}
};
