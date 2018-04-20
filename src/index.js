/**
 * Created by kid on 2017/5/15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import app from './views/app.vue';

Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);

new Vue({
	el: '#app',
	router,
	render: h => h(app)
});