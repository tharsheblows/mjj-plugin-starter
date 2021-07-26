/**
 * External dependencies
 */
import { useEffect } from 'react';
import { Fragment } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import metadata from './block.json';

/**
 * Block edit function
 *
 * @param  props
 */
function Edit(props) {
	const { attributes, setAttributes, isSelected, clientId } = props;

	// Use the clientId as a unique id for the block. This will be saved the first time the block is added.
	const getBlockId =
		typeof attributes.blockId === 'string' ? attributes.blockId : clientId;

	// Do when the block is first rendered.
	useEffect(() => {
		// We only need update the saved attribute if it's not already set. :)
		if (typeof attributes.blockId !== 'string') {
			setAttributes({ blockId: getBlockId });
		}
	}, []);

	return (
		<Fragment>
			{isSelected && <Inspector {...props} />}
			<ServerSideRender
				block={metadata.name}
				attributes={{ color: props.attributes.color }}
			/>
		</Fragment>
	);
}

export default Edit;
