/**
 * External dependencies
 */
import { useEffect } from 'react';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Game from './components/game';
import Inspector from './inspector';
import metadata from './block.json';

/**
 * Block edit function
 *
 * @param  props
 */
function Edit(props) {
	const {
		attributes,
		setAttributes,
		isSelected,
		className,
		clientId,
	} = props;

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
			<div
				className={`mjj-plugin-starter clickgame ${className}`}
				id={`porchy-cid-${getBlockId}`}
			>
				{!isSelected && (
					<Game
						attr={{
							...attributes,
							playable: 'no',
						}}
					/>
				)}
				{isSelected && (
					<Fragment>
						<Game
							attr={{
								...attributes,
								playable: 'yes',
							}}
						/>
					</Fragment>
				)}
			</div>
		</Fragment>
	);
}

export default Edit;
