const merge = require("webpack-merge"),
      common = require("./webpack.common.js"),
      uglifyjsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [
			new uglifyjsPlugin({
				sourceMap: true,
				cache: true
			})
		]
	}
});