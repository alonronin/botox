const Router = require('koa-router');
const Botox = require("@botox-sdk/botox")

function createAPIRouter(sessions) {
    const router = new Router();

    router.post('/sessions', async ctx => {
        const session = new Botox();

        sessions.set(session.id, session);
        
        ctx.body = session.id;
    });
    
    router.post('/sessions/:sessionId/q', async ctx => {
        const botox = sessions.get(ctx.params.sessionId);

        if (!botox) {
            ctx.status = 404;
            return;
        }

        const reply = await botox.ask(ctx.request.body.q);
        
        ctx.body = {reply};
    });

    return router;
}

module.exports = createAPIRouter;