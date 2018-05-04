/**
 * Created by chenjiajun on 2018/5/3.
 */

const bookModel = require('../models/book');

export const getBookInfo = async ctx => {
	let book = new bookModel({
		name: '123',
		publishDate: new Date(),
		price: 12
	});
	
	ctx.body = await book.getInfo();
};

export const getBookFullInfo = ctx => {
	let book = new bookModel({
		name: '123',
		publishDate: new Date(),
		price: 12
	});
	
	ctx.body = book.fullInfo;
};