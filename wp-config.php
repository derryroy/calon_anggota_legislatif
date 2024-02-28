<?php
define( 'WP_CACHE', true );


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
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u167104691_EV8IF' );

/** Database username */
define( 'DB_USER', 'u167104691_aSkAi' );

/** Database password */
define( 'DB_PASSWORD', 'jqE2pLf1yI' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

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
define( 'AUTH_KEY',          '*MKoQO9Dq0(`~rp!pz7*XD`Cj#iDE~60 zDvm$5|tUn%,+~D-Ch]Tn{{4NMao0D7' );
define( 'SECURE_AUTH_KEY',   '-qD;+@#$_}2ez @YR3b62X)g]S=CH/W?O<t[NHg `&EB{|8WCJ94Tx#HMH!g33)1' );
define( 'LOGGED_IN_KEY',     'PP3u&BK*>Cah0<-;8r&}IqI5`hO=@kmJJQL&gW<J?0irdC1|BjqS2ntAA3G2={rC' );
define( 'NONCE_KEY',         '58{~ b`YnicYnXx_[$t#`uWZGZqJ$4s`$^Zv`)}F9h90d1/sCrHj9U)!~$g.-9Kv' );
define( 'AUTH_SALT',         'iSP0n|q^X2rD]`@..te3RF6m<cWzjs_ymDJ$z(p|!H?>kw/`=SQMlHc:fOziy(Ku' );
define( 'SECURE_AUTH_SALT',  ',o.jk1 }36[+m2v~mnPtKG2Ko7>~DVjUx)RCGZUJ gIsh=.1-DZ*q,x:qGL=K#YX' );
define( 'LOGGED_IN_SALT',    '9>;rdU=*[Jnk3,70;XE3N5f*YyP/7^`+O#EJ#LK<@t.8pWc5mMv^tvjU69r;jE.v' );
define( 'NONCE_SALT',        'Jn*;i xTJF<&9m@rqL30VpQN}T3p.[tZbiFk>b$9=G{-6Hpl%d#0X@iF:i#aYE6W' );
define( 'WP_CACHE_KEY_SALT', 'NS^DM$XLa4Y$A.CT,Vr%XD;n%bNR&P%+J32+-1+|<<a+@Z>GyfYAfJ.y]H3s%D7u' );


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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
