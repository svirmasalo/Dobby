"use strict";

console.log("conditionals added");
/*conditionizr.add('firefox', function () {
  return 'InstallTrigger' in window;
});
var basepath = window.location;
var pathToAssets = basepath.host;
console.log(pathToAssets);
conditionizr.config({
    assets: basepath.host+'/nemoy/wp-content/themes/Dobby/js/conditionals/',
    tests: {
        safari: ['script']

    }
});*/

/*Main js file*/
(function ($) {
	console.log("Dobby main .js-file loaded");
	// Smooth scroll to top
	$('.top').on('click', function (event) {
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 700);
	});

	// Smooth scroll to ID on any anchor link
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});

	$(document).ready(function () {
		console.log("...and jquery working");
	});
})(jQuery);
'use strict';

console.log('WordPress Social Share active : https://github.com/svirmasalo/wordpress-social-share');

function formLinks(placeInDom, iconSrc) {
	var links = {
		'facebook': null,
		'twitter': null,
		'linkedin': null
	};
	/**
 * Twitter
 */
	var twitterMetaData = {
		'dataSize': 'large',
		'card': jQuery('head meta[name="twitter:card"]').attr('content'),
		'dataText': jQuery('head meta[name="twitter:description"]').attr('content'),
		'title': jQuery('head meta[name="twitter:image"]').attr('content'),
		'dataUrl': jQuery('head meta[property="og:url"]').attr('content')
	};

	var twitter_shareUrlQuery = 'https://twitter.com/share?url=' + encodeURIComponent(twitterMetaData.dataUrl) + '&text=' + encodeURIComponent(twitterMetaData.dataText);

	/**
 * Facebook
 */
	var facebookMetaData = {
		'locale': jQuery('head meta[property="og:locale"]').attr('content'),
		'localeAlt': jQuery('head meta[property="og:locale:alternate"]').attr('content'),
		'type': jQuery('head meta[property="og:type"]').attr('content'),
		'title': jQuery('head meta[property="og:title"]').attr('content'),
		'desc': jQuery('head meta[property="og:description"]').attr('content'),
		'url': jQuery('head meta[property="og:url"]').attr('content'),
		'siteName': jQuery('head meta[property="og:site_name"]').attr('content'),
		// HOX! note that 'last()' -method. It makes sure that the explicitly set image is used
		'image': jQuery('head meta[property="og:image"]').last().attr('content')
	};
	var facebook_shareUrlQuery = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(facebookMetaData.url) + '&t=' + encodeURIComponent(facebookMetaData.title);
	/**
 * Pinterest
 */
	var pinterestUrlParameters = {
		pinUrl: facebookMetaData.url,
		pinImg: facebookMetaData.image,
		pinDesc: facebookMetaData.title
	};
	var pinterestShareAttributes = {
		'data-do-pin': 'buttonPin'
	};

	var pinterest_shareUrlQuery = "https://www.pinterest.com/pin/create/button/?" + "url=" + encodeURIComponent(pinterestUrlParameters.pinUrl) + "&media=" + encodeURIComponent(pinterestUrlParameters.pinImg) + "&description=" + encodeURIComponent(pinterestUrlParameters.pinDesc);
	/**
 * Linkedin
 */
	var linkedinMetaData = {
		'url': facebookMetaData.url,
		'title': facebookMetaData.title,
		'summary': facebookMetaData.desc /*+ ' ' + facebookMetaData.image*/
		, 'source': jQuery('head title').html()
	};
	var linkedinShareBaseUrl = 'https://www.linkedin.com/shareArticle?mini=true&';
	var linkedin_shareUrlQuery = linkedinShareBaseUrl + '&url=' + encodeURIComponent(linkedinMetaData.url) + '&title=' + encodeURIComponent(linkedinMetaData.title) + '&summary=' + encodeURIComponent(linkedinMetaData.summary) + '&source=' + encodeURIComponent(linkedinMetaData.source);

	var createLinkElement = function createLinkElement(link, attr) {

		var thisLink = document.createElement('A');

		if (attr != '' && attr != null) {
			jQuery(thisLink).attr(attr);
		}

		thisLink.href = link;
		return thisLink;
	};

	var facebookLinkElement = new createLinkElement(facebook_shareUrlQuery, null);
	var linkedinkLinkElement = new createLinkElement(linkedin_shareUrlQuery, null);
	var twitterLinkElement = new createLinkElement(twitter_shareUrlQuery, null);
	var pinterestLinkElement = new createLinkElement(pinterest_shareUrlQuery, pinterestShareAttributes);

	links.facebook = facebookLinkElement;
	links.twitter = linkedinkLinkElement;
	links.linkedin = twitterLinkElement;
	links.pinterest = pinterestLinkElement;

	createWpssBlock(links, placeInDom, iconSrc);
}

/**
* Form renderable element
*/

function createWpssBlock(links, placeInDom, iconSrc) {
	/**
 * Structure:
 * section.wpss-wrap
 *  |- figure#wpss-facebook
 *   |--a
 *  |- figure#wpss-twitter
 *   |--a
 *  |- figure#wpss-linkedin
 *   |--a
 *  |- figure#wpss-pinterest
 *   |--a
 */
	var container = document.createElement('SECTION');
	container.id = 'wpss-wrap';

	var figures = [];

	var figure = function figure(network) {
		var thisFig = document.createElement('FIGURE');
		thisFig.id = 'wpss-' + network;
		figures.push(thisFig);
		return thisFig;
	};
	var fbFigure = new figure('facebook');
	var twitteFigure = new figure('twitter');
	var linkedinFigure = new figure('linkedin');
	var pinterestFigure = new figure('pinterest');

	fbFigure.append(links.facebook);
	twitteFigure.append(links.twitter);
	linkedinFigure.append(links.linkedin);
	pinterestFigure.append(links.pinterest);

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = figures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var f = _step.value;

			container.append(f);
		}

		/**
  * Append created block into body
  */
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	if (typeof placeInDom === 'string') {
		var target = document.getElementsByTagName(placeInDom)[0];
		target.append(container);
	} else {
		jQuery(container).insertAfter(placeInDom);
	}

	styleButtons(iconSrc, 'black');
}

function styleButtons(iconSrc, color) {
	/**
 * Just a few style things if you are not using font awesome
 */

	var spriteUrl = '../images/some-logosprite-' + color + '-full.png';
	var spriteNegaUrl = '../images/some-logosprite-' + color + '-full.png';
	var buttonSize = jQuery('#wpss-wrap figure').width();

	var spritePositions = {
		'twitter': 'center 0',
		'linkedin': 'center -' + buttonSize + 'px',
		'pinterest': 'center -' + buttonSize * 2 + 'px',
		'facebook': 'center -' + buttonSize * 3 + 'px'
	};

	if (iconSrc == 'local') {
		jQuery('#wpss-wrap figure a').each(function (k, v) {
			jQuery(this).css('background-image', 'url(' + spriteUrl + ')');
		});

		jQuery('#wpss-twitter a').css('background-position', spritePositions.twitter);
		jQuery('#wpss-linkedin a').css('background-position', spritePositions.linkedin);
		jQuery('#wpss-facebook a').css('background-position', spritePositions.facebook);
		jQuery('#wpss-pinterest a').css('background-position', spritePositions.pinterest);
	}
	if (iconSrc == 'fa') {

		jQuery('#wpss-twitter a').html('<i class="fa fa-twitter fa-lg"></i>').attr('href', 'https://twitter.com/share?');
		jQuery('#wpss-linkedin a').html('<i class="fa fa-linkedin fa-lg"></i>');
		jQuery('#wpss-facebook a').html('<i class="fa fa-facebook fa-lg"></i>');
		jQuery('#wpss-pinterest a').html('<i class="fa fa-pinterest fa-lg"></i>');
	}

	initEventHandlers();
}

function initEventHandlers() {

	jQuery('#wpss-twitter a').on('click', function (e) {
		e.preventDefault();
		jQuery(this).blur();
		window.open(jQuery(this).attr('href'), 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=700,height=300,top=200,left=" + (jQuery(window).innerWidth() - 700) / 2);
	});
	jQuery('#wpss-facebook a').on('click', function (e) {
		e.preventDefault();
		jQuery(this).blur();
		window.open(jQuery(this).attr('href'), 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=700,height=300,top=200,left=" + (jQuery(window).innerWidth() - 700) / 2);
	});
	jQuery('#wpss-pinterest a').on('click', function (e) {
		e.preventDefault();
		jQuery(this).blur();
		window.open(jQuery(this).attr('href'), 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=700,height=300,top=200,left=" + (jQuery(window).innerWidth() - 700) / 2);
	});
	jQuery('#wpss-linkedin a').on('click', function (e) {
		e.preventDefault();
		jQuery(this).blur();
		window.open(jQuery(this).attr('href'), 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=700,height=300,top=200,left=" + (jQuery(window).innerWidth() - 700) / 2);
	});
}

/**
* Call wpss from here or from document
*/

/*
jQuery(document).ready(function(){
	formLinks(jQuery('main header')); //Element to append this into
});
*/