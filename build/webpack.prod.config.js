/**
 * Created by chenjiajun on 2017/8/17.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');

let prodConfig = merge(baseConfig, {
	entry: {
		vendors: ['vue', 'vue-router', 'vuex', 'babel-polyfill']
	},
	output: {
		publicPath: '/',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			filename: 'js/[name].js'
		})
	]
});

module.exports = prodConfig;