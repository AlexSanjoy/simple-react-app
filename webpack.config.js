const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(css|scss)$/,
				use: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: ['css-loader', 'sass-loader']
					})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/'
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin(
			{
				filename: 'style.[chunkhash].css',
				disable: false,
				allChunks: true
			}
		),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/static/index.html',
			filename: 'index.html'
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
		contentBase: './dist'
	}
};