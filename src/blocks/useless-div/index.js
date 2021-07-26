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
	title: __('MJJ Starter Plugin Useless Div', 'mjj-plugin-starter'),
	description: __('It does not do anything at all.', 'mjj-plugin-starter'),
	icon: 'excerpt-view',
	keywords: [__('useless', 'mjj-plugin-starter')],
	attributes,
	supports,
	edit: Edit,
	save() {
		return null;
	},
};
export { name, category, settings };
