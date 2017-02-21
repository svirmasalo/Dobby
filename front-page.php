<?php // template name: frontpage ?>
<?php get_header();?>
<section role="banner" class="hero static">
	<div class="hero-container">
		<h1>I'm Dobby</h1>
	</div>
</section>
<main role="main">
	<?php get_template_part('template-parts/content','frontpage');?>
</main>

<?php get_footer();?>