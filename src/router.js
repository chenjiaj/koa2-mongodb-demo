/**
 * Created by kid on 2017/5/17.
 */
import VueRouter from 'vue-router';
import LoginRoute from './views/login/router'
import IndexRoute from './views/index/router'

const routes = [
	...LoginRoute,
	...IndexRoute
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;