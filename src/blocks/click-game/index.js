/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';

/**
 * Style dependencies
 */
import './editor.scss';
import './style.scss';

/**
 * Block constants
 */
const { name, category, attributes, supports } = metadata;

const settings = {
	title: __('MJJ Starter Plugin Click Game', 'mjj-plugin-starter'),
	description: __('The circle click game', 'mjj-plugin-starter'),
	icon: 'excerpt-view',
	keywords: [
		__('posts', 'mjj-plugin-starter'),
		__('post', 'mjj-plugin-starter'),
		__('blog', 'mjj-plugin-starter'),
	],
	attributes,
	supports,
	edit: Edit,
	save() {
		return null;
	},
};
export { name, category, settings };
