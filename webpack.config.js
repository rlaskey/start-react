const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TARGET = 'build';

module.exports = (env = {}) => new Object({
	entry: {
		index: './src/index.jsx'
	},
	output: {
		filename: (() => {
			if (env.production) return '[name].[chunkhash].js';
			return '[name].js';
		})(),
		path: path.resolve(__dirname, TARGET)
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		// https://webpack.js.org/guides/caching/#get-filenames-from-webpack-compilation-stats
		function() {
			if ( ! env.production) return false;

			this.plugin('done', function(stats) {
				require('fs').writeFileSync(
					path.join(__dirname, TARGET, 'chunks-manifest.json'),
					JSON.stringify(stats.toJson()['assetsByChunkName']));
			});
		},
		new HtmlWebpackPlugin({
			title: 'from RML3',
			template: 'src/template.ejs'
		})
	]
});
