
/**
 * Created by chenjiajun on 2018/4/19.
 */
export default [{
	name:'login',
	path:'/login',
	component: (resolve) => {
		require.ensure(['./index.vue'], () => {
			resolve(require('./index.vue'))
		})
	}
},{
	name:'reg',
	path:'/reg',
	component: (resolve) => {
		require.ensure(['./reg.vue'], () => {
			resolve(require('./reg.vue'))
		})
	}
}]