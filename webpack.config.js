const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry:['./src/app.js'],
	entry:['./src/app1.js'],
	output:{
		filename:'main.js',
		path:path.resolve(__dirname,'dist/assets'),
		publicPath:'/assets/'
	},
	mode:'development',
	module:{
		rules:[
			{
				test:/\.js$/,
				use:['babel-loader'],
				include:[path.resolve(__dirname,'./src')]
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(jpg|jpeg)$/,
				use:["file-loader"]
			}
			
			
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename:'../in.html',
			template:'./src/index.html'
		})
	],
	devtool:'cheap-module-eval-source-map'
}