(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        var typed = new Typed("#typed", {
            stringsElement: '#typed-strings',
            typeSpeed: 0,
            backSpeed: 10,
            shuffle: true,
            smartBackspace: false,
            loop: true
        });

        $('.skill-area h3').waypoint({
            handler: function(direction) {
                if (direction == "up") {
                    $('.skillbar').each(function() {
                        $(this).find('.skillbar-bar').css("width", "0");
                    });
                } else if (direction == "down") {
                    $('.skillbar').each(function() {
                        $(this).find('.skillbar-bar').animate({
                            width: jQuery(this).attr('data-percent')
                        }, 2000);
                    });
                }
            },
            offset: 'bottom-in-view'
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: false,
            nav: false
        });
        $(".logo-carousel").owlCarousel({
            loop: true,
            dots: false,
            autoplay: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }

        });

        //Isotope JS
        $(".project-titles li").on('click', function() {
            $(".project-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".project-lists").isotope({
                filter: selector
            });
        });
      //Isotope JS
        $(".portfolio-titles li").on('click', function() {
            $(".portfolio-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".portfolio-projects").isotope({
                filter: selector
            });
        });


        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > 600) {
                $(".absolute-header").addClass('active');
            } else {
                $(".absolute-header").removeClass('active');
            }
        });

        //Scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 75
        });

        //Smooth Scroll JS
        $("li.smooth-menu a, a.scroll-about, .hero-text .bordered-btn, .cta-area .bordered-btn").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '70';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        //scroll to top .    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $(".scroll-to-top a").fadeIn();
            } else {
                $(".scroll-to-top a").fadeOut();
            }
        });
        $(".scroll-to-top a").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


        //Magnificpopup JS
        $(".single-project-item").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: "animated zoomIn"

        });

        //Counter
        $(".counter").counterUp({
            delay: 10,
            time: 2000
        });

        $(".navbar-toggle").on('click', function() {
            $("body").addClass("mobile-menu-active");
        });

        $(".mainmenu ul li a").on('click', function() {
            $(".navbar-collapse").removeClass("in");
        });

        $(".parallax-bg").scrolly({ bgParallax: true });


    });

    jQuery(window).load(function() {

        $(".project-lists").isotope();
        
        $(".preloader-wrap").fadeOut(5000);

    });

}(jQuery));