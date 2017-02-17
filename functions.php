<?php
/**
 * Dobby functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package dobby
 */
/**
 * The current version of the theme.
 */
define( 'dobby_VERSION', '0.8.0' );

/**
 *  Set Yoast SEO plugin metabox priority to low
 */
function dobby_lowpriority_yoastseo() {
  return 'low';
}
add_filter( 'wpseo_metabox_prio', 'dobby_lowpriority_yoastseo' );

/**
 * Enable theme support for essential features
 */
load_theme_textdomain( 'dobby', get_template_directory() . '/languages' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
setlocale( LC_ALL, 'fi_FI.utf8' );

/**
 * Editable navigation menus.
 */
register_nav_menus( array(
	'primary' => __( 'Primary Menu', 'dobby' ),
) );

/**
* Add extra stuff to nav. UNCOMMENT TO ENABLE.
*/
//function add_last_nav_item($items) {
//  return $items .= '<li></li>';
//}
//add_filter('wp_nav_menu_items','add_last_nav_item');

/**
 * Remove WordPress Admin Bar when not on development env
 *
 * @link http://davidwalsh.name/remove-wordpress-admin-bar-css
 */
add_action( 'get_header', 'dobby_remove_admin_login_header' );
function dobby_remove_admin_login_header() {
  remove_action( 'wp_head', '_admin_bar_bump_cb' );
}

if ( getenv( 'WP_ENV' ) === 'development' && is_user_logged_in() ) {
  add_action('wp_head', 'dobby_dev_adminbar');

  function dobby_dev_adminbar() { ?>
    <style>
      html {
        height: auto;
        padding-bottom: 32px;
      }

			#wpadminbar {
				top: auto;
				bottom: 0;
			}

			#wpadminbar.nojs li:hover > .ab-sub-wrapper,
			#wpadminbar li.hover > .ab-sub-wrapper {
				bottom: 32px;
			}
		</style>
<?php }
} else {
  show_admin_bar(false);
}

/**
 * Enqueue scripts and styles.
 */
function dobby_scripts() {
  // If you want to use a different CSS per view, you can set it up here
  $dobby_template = 'global';

  wp_enqueue_style( 'styles', get_template_directory_uri() . '/css/' . $dobby_template . '.min.css' );
  wp_enqueue_style( 'font-awesome','https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'vendor-scripts', get_template_directory_uri() . '/js/Vendors/theme-vendors.min.js', array(), dobby_VERSION, true );
  wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/theme-scripts.js', array(), dobby_VERSION, true );

}
add_action( 'wp_enqueue_scripts', 'dobby_scripts' );

// Register Custom Post Type
function moduulit() {

	$labels = array(
		'name'                  => _x( 'Moduulit', 'Post Type General Name', 'dobby' ),
		'singular_name'         => _x( 'Moduuli', 'Post Type Singular Name', 'dobby' ),
		'menu_name'             => __( 'Moduulit', 'dobby' ),
		'name_admin_bar'        => __( 'Moduulit', 'dobby' ),
		'archives'              => __( 'Moduuli arkisto', 'dobby' ),
		'parent_item_colon'     => __( 'Moduulin vanhempi', 'dobby' ),
		'all_items'             => __( 'Kaikki moduulit', 'dobby' ),
		'add_new_item'          => __( 'Lisää moduuli', 'dobby' ),
		'add_new'               => __( 'Lisää uusi', 'dobby' ),
		'new_item'              => __( 'Lisää moduuli', 'dobby' ),
		'edit_item'             => __( 'Muokkaa moduulia', 'dobby' ),
		'update_item'           => __( 'Päivitä moduuli', 'dobby' ),
		'view_item'             => __( 'Tarkastele moduulia', 'dobby' ),
		'search_items'          => __( 'Etsi moduulia', 'dobby' ),
		'not_found'             => __( 'Moduulia ei löytynyt', 'dobby' ),
		'not_found_in_trash'    => __( 'Moduulia ei löytynyt roskakorista', 'dobby' ),
		'featured_image'        => __( 'Moduulin kuva', 'dobby' ),
		'set_featured_image'    => __( 'Aseta moduulin kuva', 'dobby' ),
		'remove_featured_image' => __( 'Poista moduulin kuva', 'dobby' ),
		'use_featured_image'    => __( 'Käytä moduulin kuvana', 'dobby' ),
		'insert_into_item'      => __( 'Lisää moduuliin', 'dobby' ),
		'uploaded_to_this_item' => __( 'Lataa tähän moduuliin', 'dobby' ),
		'items_list'            => __( 'Moduuli lista', 'dobby' ),
		'items_list_navigation' => __( 'Moduulit navigaatio', 'dobby' ),
		'filter_items_list'     => __( 'Suodata moduuleita', 'dobby' ),
	);
	$args = array(
		'label'                 => __( 'Moduulicategory,post_tag', 'dobby' ),
		'description'           => __( 'Moduuleista löydät sivuilla olevia yleisiä juttuja', 'dobby' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'post-formats', ),
		'taxonomies'            => array( 'post_tag' ),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 20,
		'menu_icon'             => 'dashicons-schedule',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => false,
		'can_export'            => true,
		'has_archive'           => false,		
		'exclude_from_search'   => true,
		'publicly_queryable'    => true,
		'rewrite'               => false,
		'capability_type'       => 'page',
	);
	register_post_type( 'moduulit', $args );

}
add_action( 'init', 'moduulit', 0 );

/*
ACF MAP STUFF
=============
Requires ACF plugin
*/

function my_acf_init() {
	acf_update_setting('google_api_key', 'YOUR_API_KEY');
}
function googleApiKey(){
	return 'YOUR_API_KEY';
}

add_action('acf/init', 'my_acf_init');