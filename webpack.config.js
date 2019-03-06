const path = require('path')

modules.exports = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname),
			'~': path.resolve(__dirname)
		}
	}
}