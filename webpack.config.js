const path = require('path');

module.exports = {
	entry: './index.ts', // Adjust the entry point as needed
	output: {
		filename: 'bundle.js', // Name of the output bundle
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
