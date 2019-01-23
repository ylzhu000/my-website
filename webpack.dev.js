const merge = require("webpack-merge"),
      common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: 'development',
	watch: true,
	devtool: 'inline-source-map'
})