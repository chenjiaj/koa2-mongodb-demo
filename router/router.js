/**
 * Created by chenjiajun on 2018/4/27.
 */
const Router = require('koa-router');
const request = require('request');
let router = new Router();
let {getList, addPeople, editPeople, delPeople} = require('../app/controllers/test');
let {getBookInfo, getBookFullInfo} = require('../app/controllers/book');
const fs = require('fs');

router.get('/getList', getList);
router.post('/addPeople', addPeople);
router.post('/editPeople', editPeople);
router.post('/delPeople', delPeople);
router.get('/getBookInfo', getBookInfo);
router.get('/getBookFullInfo', getBookFullInfo);

router.post('/getUserInfo', async (ctx) => {
	let code = ctx.request.body.code;
	let opt = {
		method: 'get',
		url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx574673f20dad892e&secret=9d44ec1b451f98aed9da085e1a7d8045&js_code=' + code + '&grant_type=authorization_code',
		json: true,
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		}
	};
	console.log('opt--', opt);
	
	ctx.body = await new Promise((resolve, reject) => {
		request(opt, (e, r, body) => {
			console.log('--body', body);
			if (!e && body) {
				let secret = body.session_key;
				delete body.session_key;
				resolve(body);
			} else {
				reject(e);
			}
		});
	})
});

router.get('/getCode1', async (ctx) => {
	let file = '';
	await new Promise((resolve, reject) => { // 读image文件夹
		fs.readFile('./src/static/images/add.png', function (err, data) {
			if (err) ctx.throw(err)
			
			file = data;
			resolve()  // resolve过后，await语句才结束
		})
	});
	
	ctx.res.setHeader('Content-Type','image/png');
	ctx.body = file;
});



router.get('/api/getCode', async ctx => {
	let opts = {
		method: 'get',
		url:'http://172.19.10.4:8091/anon/getAuthCode',
		headers: {
			'Content-Type': 'image/png; charset=utf-8',
			'App-Key': '1a41206d18a4546161d139c02602f413',
		}
	};
	
	/*ctx.body = await request(opts, (e, r, body) => {
		if (!e) {
			
			console.log(body)
			return Promise.resolve(body);
		} else {
			return Promise.reject(e);
		}
	});*/
	
	 ctx.body = await getData(ctx, opts);
});

function getData(ctx, opts) {
	return new Promise((resolve, reject) => {
		request(opts, (e, r, body) => {
			console.log(r);
			if (!e && body) {
				console.log(body)
				 resolve(body);
			} else {
				 reject(e);
			}
		})
	});
	
	// return request(opts, (e, r, body) => {
	// 	if (!e && body) {
	// 		console.log(body)
	// 		return Promise.resolve(body);
	// 	} else {
	// 		return Promise.reject(e);
	// 	}
	// })
}

module.exports = router;