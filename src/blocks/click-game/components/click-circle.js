import { __ } from '@wordpress/i18n';

function ClickCircle(props) {
	const { circleState } = props;
	let circleText,
		circleClass = '';

	switch (circleState) {
		case 'running':
			circleText = __('Running', 'mjj-plugin-starter');
			circleClass = 'running';
			break;
		case 'lost':
			circleText = __('Lost', 'mjj-plugin-starter');
			circleClass = 'lost';
			break;
		case 'won':
			circleText = __('Won', 'mjj-plugin-starter');
			circleClass = 'won';
			break;
		case 'timedout':
			circleText = __('Timed out', 'mjj-plugin-starter');
			circleClass = 'timedout';
			break;
		default:
			// Start :)
			circleText = __('Start', 'mjj-plugin-starter');
			circleClass = 'start';
			break;
	}
	return <div className={`click-circle ${circleClass}`}>{circleText}</div>;
}

export default ClickCircle;
