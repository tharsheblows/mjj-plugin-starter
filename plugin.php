<?php
/**
 * Plugin Name:     MJJ Plugin Starter
 * Description:     Starter plugin with blocks.
 * Version:         0.0.1
 * Author:          JJ
 * License:         GPL-2.0-or-later
 * Text Domain:     mjj-plugin-starter
 *
 * @package         mjj_plugin_starter
 */

namespace Tharsheblows\MjjPluginStarter;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( __NAMESPACE__ . 'VERSION', '0.1.0' );
define( __NAMESPACE__ . '\PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( __NAMESPACE__ . '\PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

// Require autoload file.
if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require_once dirname( __FILE__ ) . '/vendor/autoload.php';
}

// All of the hooks are in this class. I find it easier to keep track fo them that way.
$hooks = new \Tharsheblows\MjjPluginStarter\Hooks();
$hooks->add();

// This will handle registering all the server side blocks.
require_once PLUGIN_PATH . '/src/index.php';
