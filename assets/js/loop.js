jQuery( function($){

	/*----------------------/
	/* PAGE LOADER
	/*---------------------*/

	if( $('body.no-preloader').length <= 0 ) {
		$('body').jpreLoader({
			showSplash: false,
			loaderVPos: "50%"
		});
	}


	/*----------------------/
	/* MAIN NAVIGATION
	/*---------------------*/
	
	// navbar and logo switch related with scroll position
	$(window).on('scroll', function(){
		if( $(window).width() > 1024 ) {
			if( $(document).scrollTop() > 150 ) {
				setNavbarLight();
			}else {
				setNavbarTransparent();
			}
		}
	});
	
	// navbar and logo switch related with screen width
	function toggleNavbar() {
		if( ($(window).width() > 1024) && ($(document).scrollTop() <= 150) ) {
			setNavbarTransparent();
		} else {
			setNavbarLight();
		}
	}

	toggleNavbar();

	$(window).resize( function() {
		toggleNavbar();	
	});

	/* navbar setting functions */
	function setNavbarLight() {
		$('.navbar').addClass('navbar-light');
		$('.navbar-brand img').attr('src', 'assets/img/loop-logo.png');
	}

	function setNavbarTransparent() {
		$('.navbar').removeClass('navbar-light');
		$('.navbar-brand img').attr('src', 'assets/img/loop-logo-white.png');
	}

	// hide collapsible menu
	$('.navbar-nav li a').click( function() {
		if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
			$('#main-nav').collapse('hide');
		}
	});

	$('#main-nav').localScroll({
		duration: 1000,
		easing: 'easeInOutExpo'
	});

	$('.hero-buttons').localScroll({
		duration: 1000,
		easing: 'easeInOutExpo'
	});


	/*----------------------/
	/* HERO UNIT SUPERSIZED
	/*---------------------*/

	if( $('.slideshow').length > 0 ) {
		$.supersized({
				
			// Functionality		
			autoplay: 1,				// Slideshow starts playing automatically
			slide_interval: 3000,		// Length between transitions
			transition: 1, 				// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed: 1000,		// Speed of transition

			// Components
			slide_links: 'blank',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			thumb_links: 0,				// Individual thumb links for each slide
			slides:  	[				// Slideshow Images
							// {image : 'assets/img/sliders/slider1.png', title : '<div class="hero-text"><h2 class="hero-heading">HANDCRAFTED</h2><p>Built to provide great visitor experience</p></div>', thumb : '', url : ''},
							{image : 'assets/img/sliders/slider2.jpg', title : '<div class="hero-text"><h2 class="hero-heading">PARALLAX</h2><p>Scrolling the page is fun with parallax background</p></div>', thumb : '', url : ''}
							// {image : 'assets/img/sliders/editorialslider1.png', title : '<div class="hero-text"><h2 class="hero-heading">BUY ONE FOR TWO</h2><p>Buy one to get both of the agency and personal theme</p></div>', thumb : '', url : ''},
							// {image : 'assets/img/sliders/editorialslider2.png', title : '<div class="hero-text"><h2 class="hero-heading">HANDCRAFTED</h2><p>Built to provide great visitor experience</p></div>', thumb : '', url : ''},
							// {image : 'assets/img/sliders/editorialslider3.jpg', title : '<div class="hero-text"><h2 class="hero-heading">PARALLAX</h2><p>Scrolling the page is fun with parallax background</p></div>', thumb : '', url : ''},
							// {image : 'assets/img/sliders/editorialslider4.jpg', title : '<div class="hero-text"><h2 class="hero-heading">BUY ONE FOR TWO</h2><p>Buy one to get both of the agency and personal theme</p></div>', thumb : '', url : ''}   
						],
		});

		$(".fa-pause, .fa-play").click( function(){
			$(this).toggleClass("fa-pause fa-play");
		});
	}

	/*----------------------/
	/* TOOLTIP
	/*---------------------*/

	if( $(window).width() > 1024 ) {
		$('body').tooltip({
			selector: "[data-toggle=tooltip]",
			container: "body"
		});
	}

	// init scrollspy except on Opera, it doesn't work because body has 100% height
	if ( !navigator.userAgent.match("Opera/") ) {
		$('body').scrollspy({
			target: '#main-nav'
		});
	}else {
		$('#main-nav .nav li').removeClass('active');
	}

});
