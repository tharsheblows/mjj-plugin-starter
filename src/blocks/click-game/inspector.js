/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, RangeControl } from '@wordpress/components';

/**
 * Inspector controls
 *
 * @param {Object} props
 */
function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { minTime, maxTime } = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__('Game Settings', 'mjj-plugin-starter')}>
					<p>
						{__(
							"If you put in a larger minimum time than maximum time, I'll swap them around so the min is the max and vice versa. 😊",
							'mjj-plugin-starter'
						)}
					</p>
					<RangeControl
						label={__('Minimum time', 'mjj-plugin-starter')}
						help={__(
							'If the circle is clicked before this, the user will lose.',
							'mjj-plugin-starter'
						)}
						value={minTime}
						onChange={(value) => setAttributes({ minTime: value })}
						min={1}
						max={300}
					/>
					<RangeControl
						label={__('Maximum time', 'mjj-plugin-starter')}
						help={__(
							'If the circle is clicked after this, the user will lose.',
							'mjj-plugin-starter'
						)}
						value={maxTime}
						onChange={(value) => setAttributes({ maxTime: value })}
						min={1}
						max={300}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}

export default Inspector;
