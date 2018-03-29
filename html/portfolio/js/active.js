(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        //Kenburncy JS
        $("#kenburnsy-bg").kenburnsy({
            fullscreen: true
        });

        //Skillbar JS
        $('.skill-area').waypoint({
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

        //Isotope JS
        $(".portfolio-titles li").on('click', function() {
            $(".portfolio-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".portfolio-projects").isotope({
                filter: selector
            });
        });

        //Counter
        $(".counter").counterUp({
            delay: 10,
            time: 2000
        });

        //Magnificpopup JS
        $(".preview-icon").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            },
            mainClass: "animated zoomIn"

        });

        //Testimonial
        $(".testimonial-list").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            nav: false,
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        });

        //Sticky Header JS
        $(".header-area").sticky({
            topSpacing: 0
        });

        //Bootstrap Scrollspy 
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 70
        });

        //Smooth Scroll JS
        $("li.smooth-scroll a, a.smooth-scroll, .cta-area .boxed-btn").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '70';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        //Mobile Menu Active JS
        $(".navbar-toggle").on('click', function() {
            $("body").addClass("mobile-menu-activated");
        });
        
        $(".mainmenu ul li a").on('click', function() {
            $(".navbar-collapse").removeClass("in");
        });

        //Select Color Chooser
        $("#colors li").on('click', function() {
            $("#colors li").removeClass("active");
            $(this).addClass("active");
        });

        //ScrollToTop  JS  
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $(".scroll-to-top a").fadeIn();
            } else {
                $(".scroll-to-top a").fadeOut();
            }
        });
        $(".scroll-to-top a").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });




    });

    jQuery(window).load(function() {

        //Isotope JS
        $(".portfolio-projects").isotope();

        //Preloader JS
        $(".site-spinner-wrap").fadeOut(5000);



    });

}(jQuery));