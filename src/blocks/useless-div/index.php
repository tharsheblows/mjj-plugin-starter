<?php

namespace Tharsheblows\MjjPluginStarter\uselessdiv;

/**
 * Register the contact form block.
 *
 * @return void
 */
function register_block() {
	$block = json_decode( file_get_contents( plugin_dir_path( __FILE__ ) . 'block.json' ), true );

	register_block_type(
		$block['name'],
		[
			'attributes'      => $block['attributes'],
			'render_callback' => __NAMESPACE__ . '\render_useless_button',
		]
	);
}

/**
 * Render the contact form block.
 *
 * @param array $attributes The block attributes.
 * @return string
 */
function render_useless_button( $attributes ) {

	ob_start();
	json_decode( require_once( \Tharsheblows\MjjPluginStarter\PLUGIN_PATH . 'src/blocks/useless-div/block.json' ), true );
	$metadata = ob_end_clean();

	$button_id = $attributes['blockId'] ?? '12345';
	$color     = $attributes['color'] ?? $metadata['attributes']['color']['default'];

	return sprintf( '<div class="mjj-plugin-starter uselessdiv" id="%s" style="background-color:%s">I am a useless div and you cannot edit this text</div>', $button_id, $color );
}
