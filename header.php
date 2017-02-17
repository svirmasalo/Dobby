<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package dobby
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<!-- Oh, those icons. Generate: http://realfavicongenerator.net/ -->
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/manifest.json">
<link rel="mask-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/images/favicons/safari-pinned-tab.svg" color="#2c2c2b">
<meta name="apple-mobile-web-app-title" content="dobby-humble-wordpress-starter">
<meta name="application-name" content="dobby-humble-wordpress-starter">
<meta name="theme-color" content="#ffffff">



<?php wp_head(); ?>
	<script>
/*	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-85708036-1', 'auto');
	  ga('send', 'pageview');
*/
	</script>
</head>
<body <?php body_class();?> >
<header class="site-header">
	<?php 
		$navArgs = [
			'menu_class' => 'menu',
			'container' => 'nav',
		];
		wp_nav_menu($navArgs);
	?>
</header>