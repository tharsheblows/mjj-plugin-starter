const path = require('path');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');
let adminEnv = '';
let frontEndEnv = '';

// Check if local.json exists
try {
	const localEnv = require('./local.json');
	adminEnv = localEnv.adminURL;
	frontEndEnv = localEnv.frontEndURL;
} catch (err) {
	// Fallback if it does not
	adminEnv = 'https://wp-test.test';
	frontEndEnv = 'https://wp-test.test';
}

const adminConfig = {
	...defaultConfig,
	entry: './src/index.js',
	plugins: [
		...defaultConfig.plugins,
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3123, // Port 3000 is always in use elsewhere for me 🙄.
				proxy: adminEnv,
				open: true,
				files: [
					'build/*.php',
					'build/*.js',
					'build/*.css',
					'includes/*.php',
					'plugin.php',
				],
			},
			{
				injectCss: true,
				reload: true,
			}
		),
	],
};

const frontEndConfig = {
	...defaultConfig,
	entry: './src/front-index.js',
	output: {
		...defaultConfig.output,
		path: path.resolve(process.cwd(), 'dist'), // For some reason, npm run build removes the front bundle from /build so I'm explicitly setting the path here so it doesn't randomly change.
		filename: 'front.bundle.js',
	},
	stats: {
		maxModules: Infinity, // Way too much information but I like it.
		exclude: undefined,
	},
	plugins: [
		// including ...defaultConfig.plugins here causes it not to build the bundle.
		new BrowserSyncPlugin(
			{
				host: 'localhost',
				port: 3124,
				proxy: frontEndEnv,
				open: true,
				files: [
					'build/*.php',
					'build/*.js',
					'build/*.css',
					'dist/*',
					'includes/*.php',
					'plugin.php',
				],
			},
			{
				injectCss: true,
				reload: true,
			}
		),
		new DependencyExtractionWebpackPlugin(), // This creates the assets php file.
	],
};

module.exports = [adminConfig, frontEndConfig];
