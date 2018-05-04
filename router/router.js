/**
 * Created by chenjiajun on 2018/4/27.
 */
const Router = require('koa-router');
let router = new Router();
let {getList, addPeople, editPeople, delPeople} = require('../app/controllers/test');
let {getBookInfo,getBookFullInfo} = require('../app/controllers/book');

router.get('/getList', getList);
router.post('/addPeople', addPeople);
router.post('/editPeople', editPeople);
router.post('/delPeople', delPeople);
router.get('/getBookInfo', getBookInfo);
router.get('/getBookFullInfo', getBookFullInfo);

module.exports = router;