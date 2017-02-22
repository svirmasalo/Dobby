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

    function navState(){
      return $('nav').hasClass("mobile");
    }

    function navStateChange(winWidth){
      if (winWidth <= 768 && navState() === false ){
        $('nav').addClass('mobile');
      }else if(winWidth > 768 && navState() === true){
        $('nav').removeClass('mobile');
      }        
    }

	$(document).ready(function(){
		var winWidth = $(window).width();
        navStateChange(winWidth);
        /**
        * Mobile navgation
        */
        $('#nav-toggle').on('click',function(e){
            $(this).toggleClass('focus');
            $('nav').toggleClass('open');
        });

	});
    $(window).resize(function(e){
        var winWidth = $(window).width();
        navStateChange(winWidth);
    });

} )( jQuery );