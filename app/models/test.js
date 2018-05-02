/**
 * Created by chenjiajun on 2018/4/28.
 */
const mongoose = require('mongoose');
const Schema = require('../schemas/test');
const People = mongoose.model('people', Schema);

module.exports = People;