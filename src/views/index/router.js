/**
 * Created by chenjiajun on 2018/4/19.
 */
export default [{
	name: 'index',
	path: '/',
	component: (resolve) => {
		require.ensure(['./index.vue'], () => {
			resolve(require('./index.vue'))
		})
	}
}]