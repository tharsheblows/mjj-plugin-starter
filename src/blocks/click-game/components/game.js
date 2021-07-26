/**
 * External dependencies
 */
import { useState, useEffect } from 'react';
import { sprintf, __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ClickCircle from './click-circle';
import metadata from '../block.json';

function Game(props) {
	const { minTime, maxTime, playable } = props.attr;

	// The defaults don't automatically default on the front end, so need to be explicitly set.
	const maybeMin = minTime || metadata.attributes.minTime.default;
	const maybeMax = maxTime || metadata.attributes.maxTime.default;

	// Check if we need to swap these around.
	const min = maybeMax > maybeMin ? parseInt(maybeMin) : parseInt(maybeMax);
	const max = maybeMax > maybeMin ? parseInt(maybeMax) : parseInt(maybeMin);

	// Allows use in the editor.
	const defaultStatus =
		playable === 'no'
			? sprintf(
					__(
						'Click to edit. Min time: %d Max time: %d',
						'mjj-plugin-starter'
					),
					minTime,
					maxTime
			  )
			: sprintf(
					__(
						'Click to start, click again in %d to %d seconds to win.',
						'mjj-plugin-starter'
					),
					min,
					max
			  );

	const [gameState, setGameState] = useState('start');
	const [start, setStart] = useState(null);
	const [gameStatus, setGameStatus] = useState(defaultStatus);

	const getResult = () => {
		// When is the window to win?
		const winFrom = min * 1000 + start;
		const winTo = max * 1000 + start;

		const now = new Date().getTime();
		const timeElapsed = (now - start) / 1000;

		if (now <= winTo && now >= winFrom) {
			return {
				status: sprintf(
					__(
						'You won! You clicked after %f seconds.',
						'mjj-plugin-starter'
					),
					timeElapsed
				),
				state: 'won',
			};
		}
		return {
			status: sprintf(
				__(
					'You lost! You clicked after %f seconds.',
					'mjj-plugin-starter'
				),
				timeElapsed
			),
			state: 'lost',
		};
	};

	const clicked = () => {
		if (playable === 'no') {
			return;
		}
		switch (gameState) {
			case 'start':
				setStart(new Date().getTime());
				setGameStatus(
					__(
						`Click again in ${min} to ${max} seconds to win`,
						'mjj-plugin-starter'
					)
				);
				setGameState('running');
				break;
			case 'running':
				const result = getResult();
				setGameStatus(result.status);
				setGameState(result.state);
				break;
			default:
				setGameStatus(defaultStatus);
				setGameState('start');
		}
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 32) {
			e.preventDefault();
			clicked();
		}
	};

	// If the minTime or maxTime are updated while playing the game, start over.
	useEffect(() => {
		setGameStatus(defaultStatus);
		setGameState('start');
	}, [minTime, maxTime]);

	return (
		<div
			className="game"
			role="button"
			tabIndex={0}
			onClick={() => clicked()}
			onKeyDown={(e) => handleKeyDown(e)}
		>
			<ClickCircle circleState={gameState} />
			<p className="game-status">{gameStatus}</p>
		</div>
	);
}

export default Game;
