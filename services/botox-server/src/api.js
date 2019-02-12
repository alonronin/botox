const path = require("path");
const Router = require('koa-router');
const Botox = require("@botox-sdk/botox");
const dialogFlow = require('@botox-sdk/ai-dialogflow');

function createAPIRouter(sessions) {
    const router = new Router();

    router.post('/sessions', async ctx => {
        const botox = new Botox({
            engine: dialogFlow({
                path: path.resolve('./credentials.json'),
                projectId: 'coffee-shop-b810a',
                languageCode: 'en-US'
            }),
            integrations: [],
            actions: {
                'input.welcome': async response => response.fulfillmentText
            }
        });

        sessions.set(botox.sessionId, botox);

        ctx.body = botox.sessionId;
    });

    router.post('/sessions/:sessionId/q', async ctx => {
        const botox = sessions.get(ctx.params.sessionId);

        if (!botox) {
            ctx.status = 404;
            return;
        }

        const message = await botox.ask(ctx.request.body.q);

        ctx.body = {
            message
        };
    });

    return router;
}

module.exports = createAPIRouter;