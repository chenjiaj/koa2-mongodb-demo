/**
 * Created by chenjiajun on 2018/5/3.
 */
const mongoose = require('mongoose');
const bookSchemas = require('../schemas/book');

const bookModel = mongoose.model('book', bookSchemas);

module.exports = bookModel;