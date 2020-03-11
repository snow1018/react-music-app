import http from '../common/http'


// export function addBackorder(data) {
// 	return fetch({
// 		url: '/oms/createReceiveMoneyBillAsTG',
// 		method: 'post',
// 		data
// 	})
// }

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
// 工作内容：1.负责网站，客户端前端页面开发制作，以及前端与业务层交互设计,开发和维护；
// 2.持续的优化前端体验和页面响应速度，优化代码并保持良好兼容性，提升web界面的友好和易用。
// 3.根据产品需求，分析并给出最优的页面前端结构解决方案；
// 4.与设计师合作完成网站页面前端的特效和最新的应用；



// 项目二名称：摩贝网移动站
// 项目描述：摩贝网移动站是摩贝的一个移动端app，是化学行业专业电商综合服务平台，整合海量优质化工供求信息如：化工产品、CAS号查询、化合物数据搜索、化工企业名录、结构式等行业
// 应用技术：1.使用了vue+weex来进行开发， 
// 2.通过vue-router构建单页面应用,vuex来实现单文件组件和数据的抽离
// 3.使用$http技术读取后台数据，动态调取传送数据完成页面数据的读取,通过params进行传值，通过地址栏传参的方式获取商品的详情页；
// 4.使用Swiper实现首页banner的轮播切换，iscoll结合ajax实现上拉加载，下拉刷新
// 4.采用图片懒加载方式显示商品，以提高页面的响应速度。 
// 5.使用Git作为代码管理工具；
// 职责描述：1.负责列表页静态页面的编写。
// 2.负责列表和详情页与后台数据的交互，

// 项目二名称：摩贝SAAS平台系统
// 项目描述：摩贝SAAS平台是由摩贝设计并推出，服务于广大化工行业的终端工厂、贸易商（简称服务对象）。为服务对象提供从客户管理、商品管理、库存管理、销售管理、资金管理、信用管理等一系列的工具，并连接摩贝网相关平台（摩贝网、OMS、金融系统等），实现业务的互联互通
// 应用技术：1.使用了vue+element-ui来进行开发， 
// 2.通过vue-router构建单页面应用,vuex来实现单文件组件和数据的抽离
// 3.使用$http技术读取后台数据，动态调取传送数据完成页面数据的读取,通过params进行传值，通过地址栏传参的方式获取商品的详情页；
// 4.采用图片懒加载方式显示商品，以提高页面的响应速度。 
// 5.使用Git作为代码管理工具；
// 职责描述：1.负责列表页静态页面的编写。
// 2.负责列表和详情页与后台数据的交互，