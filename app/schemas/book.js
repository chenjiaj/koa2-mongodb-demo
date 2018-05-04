/**
 * Created by chenjiajun on 2018/5/3.
 */

const mongoose = require('mongoose');


let bookSchemas = new mongoose.Schema({
	name: String,
	publishDate: Date,
	price: Number
}, {safe: true});

bookSchemas.methods.getInfo = function () {
	return {
		name: this.name,
		publishDate: this.publishDate,
		price: this.price
	}
};

bookSchemas.virtual('fullInfo').get(function () {
	return {
		name: this.name,
		publishDate: this.publishDate,
		price: this.price
	}
});

module.exports = bookSchemas;