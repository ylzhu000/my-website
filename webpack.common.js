const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSPlugin = new MiniCssExtractPlugin({
	filename: '[name].css',
    chunkFilename: '[id].css'
})

module.exports = {
	entry: [
		path.resolve(__dirname, './src/index.js')
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{	
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}, {
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader'
					
				]
			}, {
				test: /\.(png|jpg|gif|svg|pdf)$/,
				use: [
					{
						loader: 'file-loader',
					}
				]
			}
		]
	},
	plugins: [CSSPlugin]
}