/**
 * Created by chenjiajun on 2018/4/28.
 */
const People = require('../models/test');

export const getList = async ctx => {
	
	let data = await getData();
	
	ctx.body = {
		resultCode: 0,
		desc: '查询',
		list: data
	};
	
};

function getData() {
	return new Promise(function (resolve, reject) {
		People.find({}, (err, data) => {
			if (err) {
				reject(data);
			} else {
				resolve(data)
			}
		});
	})
}

export const addPeople = async ctx => {
	let body = ctx.request.body;
	let name = body.name;
	let age = body.age;
	
	let newPeople = new People({
		name: name,
		age: age
	});
	
	console.log('--newPeople--', newPeople);
	
	let result = await new Promise((resolve, reject) => {
		newPeople.save((err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
	console.log('--result--', result);
	if (result) {
		ctx.body = {
			resultCode: 0,
			msg: '添加成功'
		}
		
	} else {
		ctx.body = {
			resultCode: -1,
			msg: '保存失败'
		}
	}
};


export const editPeople = async ctx => {
	let body = ctx.request.body;
	let id = body.id;
	let name = body.name, age = body.age;
	if (id) {
		let result = await new Promise((resolve, reject) => {
			People.update({
				_id: id
			}, {name: name, age: age}, function (err, movie) {
				if (err) {
					reject({resultCode: -1, err});
				} else {
					resolve({resultCode: 0, data: movie});
				}
			});
		});
		
		if (result.resultCode === 0) {
			ctx.body = {
				resultCode: 0,
				msg: '编辑成功'
			};
		} else {
			ctx.body = {
				resultCode: -1,
				msg: '编辑失败'
			};
		}
	} else {
		ctx.body = {
			resultCode: -1,
			msg: '编辑失败'
		};
	}
	
};

export const delPeople = async ctx => {
	let body = ctx.request.body;
	let id = body.id;
	
	if (id) {
		let result = await new Promise((resolve, reject) => {
			People.remove({
				_id: id
			}, function (err, movie) {
				if (err) {
					reject({resultCode: -1, err});
				} else {
					resolve({resultCode: 0, data: movie});
				}
			});
		});
		
		if (result.resultCode === 0) {
			ctx.body = {
				resultCode: 0,
				msg: '删除成功'
			};
		} else {
			ctx.body = {
				resultCode: -1,
				msg: '删除失败'
			};
		}
	} else {
		ctx.body = {
			resultCode: -1,
			msg: '删除失败'
		};
	}
};
