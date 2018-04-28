/**
 * Created by kid on 2017/5/15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import app from './views/app.vue';
import myFetch from './plugins/my-fetch';

Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(myFetch);

new Vue({
	el: '#app',
	router,
	render: h => h(app)
});