/**
 * Created by chenjiajun on 2018/4/28.
 */
const mongoose = require('mongoose');

let Schema = mongoose.Schema({
	name: String,
	age: Number
});

module.exports = Schema;