jQuery(function () {
	console.log("slick loaded");
	jQuery('#slick .article-body').slick({
		accessibility:true,
		centerMode:true,
		centerPadding:'1rem',
		slidesToShow: 3,
		slide:'.slide'
	});
});