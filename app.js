/**
 * Created by kid on 2017/5/15.
 */
const Koa = require('koa');
const app = new Koa();
const bodypaser = require('koa-body');
const history = require('./middleware/koa2-connect-history-api-fallback');
const staticCache = require('koa-static-cache');
const router = require('koa-router')();
const path = require('path');
const request = require('request');
const mongoose = require('mongoose');
const routers = require('./router/router');
mongoose.connect('mongodb://localhost:27017/test');

app.use(history({
	verbose: true
}));


if (app.env === 'development') {
	let webpackDevConfig = require('./build/webpack.dev.config');
	let hotMiddleware = require('koa-webpack-middleware').hotMiddleware;
	let devMiddleware = require('koa-webpack-middleware').devMiddleware;
	let webpack = require('webpack');
	let compiler = webpack(webpackDevConfig);
	
	app.use(devMiddleware(compiler, {
		watchOptions: {
			// aggregateTimeout: 300,
			// poll: true
		},
		publicPath: '/',
		stats: {
			colors: true,
			chunks: false
		}
	}));
	app.use(hotMiddleware(compiler));
} else {
	app.use(staticCache(path.join(__dirname, '/dist')));
}

app.use(routers.routes());

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodypaser());


app.use(router.routes()).use(router.allowedMethods());

app.listen(9000);
