/**
 * Created by chenjiajun on 2018/4/27.
 */
const Router = require('koa-router');
let router = new Router();
let {getList} = require('../app/controllers/test');

router.get('/getList', getList);

module.exports = router;