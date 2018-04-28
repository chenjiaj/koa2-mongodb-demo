import fetch from 'isomorphic-fetch';

const opts = {
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'accept': 'application/json'
	}
};

export default {
	fetch: $fetch,
	get: $get,
	post: $post,
	install: (Vue, options) => {
		Vue.mixin({
			methods: {
				$fetch,
				$get,
				$post
			}
		})
	}
}

async function $fetch(url, option = {}) {
	//
	return await myFetch(url, option);
}

async function $get(url) {
	let getOpts = Object.assign({
		method: 'GET'
	}, opts);
	
	let result = await myFetch(url, getOpts);
	
	if (result.code === -3 && GetUrlRelativePath() !== '/') {
		location.href = '/';
	} else {
		return result;
	}
}

async function $post(url, data) {
	let postOpts = Object.assign({
		method: 'POST'
	}, opts);
	
	data ? postOpts.body = JSON.stringify(data) : postOpts;
	
	let result = await myFetch(url, postOpts);
	
	if (result.code === -3 && GetUrlRelativePath() !== '/') {
		location.href = '/';
	} else {
		return result;
	}
}

function myFetch(url, opts) {
	return new Promise(async (resolve) => {
		let result = await fetch(url, opts);
		
		if (result.status >= 400) {
			resolve({
				code: -1,
				resultMsg: '服务器内部错误'
			})
		} else {
			resolve(result.json());
		}
	})
}

function GetUrlRelativePath() {
	const url = document.location.toString();
	const arrUrl = url.split("//");
	
	const start = arrUrl[1].indexOf("/");
	let relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
	
	if (relUrl.indexOf("?") !== -1) {
		relUrl = relUrl.split("?")[0];
	}
	
	return relUrl;
}