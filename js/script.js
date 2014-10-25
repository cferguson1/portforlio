jQuery(function ($) {

	$('[data-toggle="tooltip"]').tooltip({
	    	'placement': 'top'
	});

	///////////////////////////////////////////////
	// Lightbox Start /////////////////////////////
	///////////////////////////////////////////////

	//Add empty lightbox container to body
	if ( $('.lightbox').length > 0 ) {
		$('body').append('<div id="lightbox"><div class="container"></div></div>');
	}

	//Open lightbox on link click
	$('.lightbox').on('click', function(event){

		//Stop browser from redirecting to new page
		event.preventDefault();

		var that = $(this),
			src = that.attr('href');

		//Get contents of page
		$.ajax({
			url: src,
			context: document.body,
			cache: false
		//What do with contents? Insert them into lightbox
		}).done(function(data){
			var box = $('#lightbox'),
				container = $('#lightbox > .container'),
				toTop = $(window).scrollTop();
			container.html('');
			container.append(data + '<span class="lightbox-exit btn btn-warning"><i class="fa fa-close"></i>Esc</span>');
			box.addClass('show');
			$('body').addClass('lightbox-active');
			//Exit Button
			$('.lightbox-exit').on('click', function(){
				$('body').removeClass('lightbox-active');
				$('#lightbox').removeClass('show');
				$(window).scrollTop(toTop);
			});
			//Exit with ESC
			$(document).on('keyup', function(e){
				if (e.keyCode == 27) {
					$('body').removeClass('lightbox-active');
					$('#lightbox').removeClass('show');
					$(window).scrollTop(toTop);
				}
			});
		});
	});

	///////////////////////////////////////////////
	// Lightbox Start End /////////////////////////
	///////////////////////////////////////////////



	/////////////////////////////////////////////////
	// Float Menu Start /////////////////////////////
	/////////////////////////////////////////////////

	var headHeight = $('header').outerHeight();
	var menuHeight = $('#mainMenu').outerHeight();

	var positionMenu = function() {
		headHeight = $('header').outerHeight();
		menuHeight = $('#mainMenu').outerHeight();

		if( $(this).scrollTop() > headHeight ) {
			$('nav.navbar').addClass('navbar-fixed-top');
			$('#main-content').css('padding-top', menuHeight + 30);
		} else {
			$('nav.navbar').removeClass('navbar-fixed-top');
			$('#main-content').css('padding-top', 30);
		}
	}

	positionMenu();

	$(window).on( 'touchmove scroll', function() {
		positionMenu();
	});

	///////////////////////////////////////////////
	// Float Menu End /////////////////////////////
	///////////////////////////////////////////////

});
