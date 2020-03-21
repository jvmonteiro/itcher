const path = require('path');

module.exports = {
	mode: 'development',
	entry: './app.js',
	devtool: 'inline-source-map',
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'build'),
	},
};
