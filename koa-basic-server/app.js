import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import Cors from 'kcors';
import http from "http";

const app = new Koa();
const mainRouter = new Router();

app.use(BodyParser());

app.use(Cors({
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
    headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(mainRouter.routes()).use(mainRouter.allowedMethods());

const server = http.createServer(app.callback());

module.exports = server;

