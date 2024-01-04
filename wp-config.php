<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/documentation/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'bitnami_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_wordpress' );


/** Database password */

define( 'DB_PASSWORD', '' );


/** Database hostname */

define( 'DB_HOST', 'mariadb:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         '*9?_8D5jSMZKhFeTQ}?y<- cJR,+c37H`xgnd7:,pFa/`z%&1S];UD4^$SP@j)K(' );

define( 'SECURE_AUTH_KEY',  'gZ%KnoN9w>AZ^M2]0r^O@?,iT%*V#}ctGv_iQ/0j(]6[neh iMV-S%fRK@];jGyR' );

define( 'LOGGED_IN_KEY',    '{Gp|M|r]yl=?2uP^P}U2*_</.!ujV8P5JXgv$Dj#z~_$N`jlPSl6O?1jD]w>$5jz' );

define( 'NONCE_KEY',        'h`b%#31!042T5Rz/?]tEf7b`kSsH|a2V0T<`AD0mH%}T4W*0lT[6`we>N})e;j&' );

define( 'AUTH_SALT',        'sh-4omDw}a9T`3dM&5}apj{FI1P=>x/{f*!ve@+lgW/vM<G<X+=pjLgpXCJ#& +1' );

define( 'SECURE_AUTH_SALT', ']3jxS*EZivMk2w;8{Hm9*uSI7IjGe4ipRF2E7YQkDF?m*{+vq>Up%XX)18mWU&?-' );

define( 'LOGGED_IN_SALT',   'IOl}{C[]P:AJXLS.veJ|+-=snbE t_;;Pn0 !&w(JQP|dGHX2`j4lnKZ<cSJGI8y' );

define( 'NONCE_SALT',       '7n9_PMOUc:~lb*SiwU]z.84~J/DZJAOd_y[J&gcTq~vDHQV{;T_A^$v%`XohhCYI' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', true );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}