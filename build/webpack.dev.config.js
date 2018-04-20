/**
 * Created by kid on 2017/5/22.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');

let devConfig =  merge(baseConfig, {
	entry: {
		index:[
			'webpack-hot-middleware/client?reload=1',
			'./src/index.js'
		]
	},
	output: {
		path: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
});

module.exports = devConfig;