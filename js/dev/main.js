/*Main js file*/
( function( $ ) {
	console.log("Dobby main .js-file loaded");
    // Smooth scroll to top
    $('.top').on('click', function(event){
      event.preventDefault();
      $('body, html').animate({
        scrollTop: 0,
        }, 700
      );
    });

    // Smooth scroll to ID on any anchor link
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
	
	$(document).ready(function(){
		console.log("...and jquery working");
	});
} )( jQuery );