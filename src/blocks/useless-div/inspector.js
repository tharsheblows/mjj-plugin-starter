/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, ColorPicker } from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { color } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__(
					'Choose the color of your button',
					'mjj-plugin-starter'
				)}
			>
				<ColorPicker
					color={color}
					onChangeComplete={(value) =>
						setAttributes({ color: value.hex })
					}
					disableAlpha
				/>
			</PanelBody>
		</InspectorControls>
	);
}

export default Inspector;
