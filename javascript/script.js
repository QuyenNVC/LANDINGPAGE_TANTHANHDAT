// PLUGIN MENU
(function($) {
    $.fn.menumaker = function(options) {
        var mainmn = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).closest('#main-menu');
                if (mainmenu.hasClass('open')) {
                    mainmenu.removeClass('open');
                } else {
                    mainmenu.addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            mainmn.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                mainmn.find(".has-sub").prepend('<span class="submenu-button"></span>');
                $('.has-sub').on('click', function() {
                    $(this).find('.submenu-button').toggleClass('submenu-opened');
                    if ($(this).find('.submenu-button').siblings('ul').hasClass('open')) {
                    	$(this).css('background', 'unset');
                        $(this).find('.submenu-button').siblings('ul').removeClass('open').slideToggle();
                    } else {
                    	$(this).css('background', '#377a49');
                        $(this).find('.submenu-button').siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else mainmn.addClass('dropdown');
            if (settings.sticky === true) mainmn.css('position', 'fixed');
            resizeFix = function() {
                var mediasize = 1016;
                if ($(window).width() > mediasize) {
                    mainmn.find('ul').show();
                    mainmn.children('ul').children('li').css('background', 'transparent');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

$(document).ready(function() {
	// menu
	$("header .menu-bottom li.parent").mouseenter(function(event) {
		$(this).children('ul').slideDown('slow');
	});

	$("header .menu-bottom li.parent").mouseleave(function(event) {
		$(this).children('ul').slideUp('slow');
	});

	// plugin menu
	$("#main-menu").menumaker({
		format: "multitoggle"
	});

	$("#owl-partner").owlCarousel({
        loop: true,
        items: 5,
        responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        720:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:6,
	            nav:true
	        }
	    }
    });

    $("#owl-product").owlCarousel({
        loop: true,
        items: 5,
        responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:2,
	            nav:false
	        },
	        992:{
	            items:3,
	            nav:true
	        }
	    }
    });

	$("#owl-service").owlCarousel({
        loop: true,
        items: 5,
        responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:2,
	            nav:false
	        },
	        992:{
	            items:3,
	            nav:true
	        }
	    }
    });

    $("#owl-banner").owlCarousel({
        loop: true,
        items: 1,
    });

	$(".to-top").click(function(event) {
		$('html').animate({scrollTop: 0}, 500);
		return false;
	});
	$(window).scroll(function(event) {
		$(this).scrollTop()==0 ? $('.to-top').fadeOut() : $('.to-top').fadeIn();
	});
});