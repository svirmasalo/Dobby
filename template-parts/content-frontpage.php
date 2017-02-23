<section class="main-content">
	<article>
		<header class="article-header">
			<?php the_title('<h1>','</h1>');?>
		</header>
		<div class="article-body">
			<?php
				the_content();
			?>
			<?php 
				// print_r('<pre>');
				// 	var_dump(get_field('mv_kuva'));
				// print_r('</pre>');
			?>
			<img src="
			<?php 
				echo colorizeImage(get_field('mv_kuva'));
			?>
			">
		</div>
		<footer class="article-footer">
			
		</footer>
	</article>
</section>
<section class="features">
	<article id="slick">
		<header class="article-header">
			<h2>This is slick</h2>
		</header>
		<div class="article-body">
			<figure class="slide">
				<img src="http://placehold.it/300x300" alt="slide placeholder">
				<figcaption>Slide 1</figcaption>
			</figure>
			<figure class="slide">
				<img src="http://placehold.it/300x300" alt="slide placeholder">
				<figcaption>Slide 2</figcaption>
			</figure>
			<figure class="slide">
				<img src="http://placehold.it/300x300" alt="slide placeholder">
				<figcaption>Slide 3</figcaption>
			</figure>
		</div>
		<footer class="article-footer">
			<p><strong>Slick slider</strong>&nbsp;<a href="http://kenwheeler.github.io/slick/">documentation</a></p>
		</footer>
	</article>
</section>