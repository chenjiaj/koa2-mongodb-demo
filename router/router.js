/**
 * Created by chenjiajun on 2018/4/27.
 */
const Router = require('koa-router');
let router = new Router();
let {getList, addPeople, editPeople, delPeople} = require('../app/controllers/test');

router.get('/getList', getList);
router.post('/addPeople', addPeople);
router.post('/editPeople', editPeople);
router.post('/delPeople', delPeople);

module.exports = router;