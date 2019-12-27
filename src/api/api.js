import http from '../common/http'


export function addBackorder(data) {
	return fetch({
		url: '/oms/createReceiveMoneyBillAsTG',
		method: 'post',
		data
	})
}

// promise的封装操作
function to(promise) {
	return promise
		.then(data => {
			return [null, data];
		})
		.catch(err => [err]);
}

const httpApi = {
	// login请求
	async login(params) {
		const url = '/userManage/login';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			//请求失败
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		//请求成功
		return res;
	},
	//logout 请求
	async logout(params) {
		const url = '/userManage/logout';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	async fetchBannerList(params) {
		const url = '/banner';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	async fetchSongList(params) {
		const url = '/personalized';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	async fetchPlayList(params) {
		const url = '/related/playlist';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	async fetchPlayDetail(params) {
		const url = '/playlist/detail';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	async fetchSearchHot(params) {
		const url = '/search/hot/detail';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	async fetchSearchMult(params) {
		const url = '/search/multimatch';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	async fetchSearchList(params) {
		const url = '/search';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	},
	// 搜索建议
	async fetchSuggestList(params) {
		const url = '/search/suggest';
		const [err, res] = await to(http.get(url, params));
		if (err) {
			return Object.assign(err, {
				status: "406",
				description: err.errMsg
			}, true);
		}
		return res;
	}
	//其他业务请求.....
}
export default httpApi;