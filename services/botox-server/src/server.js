const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
//
const createAPIRouter = require("./api");

const port = 3000;

async function startServer() {
    const sessions = new Map();

    const app = new Koa();

    app.use(bodyParser());

    app.use(createAPIRouter(sessions).routes());

    app.listen(port, () => {
        console.log(`Botox server is listening on port ${port}`);
    });
}

module.exports = startServer;