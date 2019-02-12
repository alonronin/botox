const botox = require('@botox-sdk/botox')

const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaJsonParser = require('koa-bodyparser');
const app = new Koa();
const router = new KoaRouter()

app.use(KoaJsonParser())
var botMap = new Map();


router.get('/hello', async ctx => {
	var oby = {
		name: 'hello'
	}

	ctx.body = oby;

})
.post('/bots', async ctx => {
//	var botData = sdk.createNewBot(...);


//	return to user;
console.log('ask a q');

})
.post('/bots/:bot_id/q', async ctx => {
	var question = ctx.request.body.q;
	var botId = ctx.params.bot_id;
	var bot = botMap.get(botId)
	if (!bot) {
		ctx.status = 404;
		return;
	}
	// bot.ask(q);
	// handle with sdk
})

app.use(router.routes())

app.listen(11111, () => {
	console.log('inited');
})

