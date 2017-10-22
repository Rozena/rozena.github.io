var $ = jQuery.noConflict();
(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        //slider
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        });

        // slider animation
        $(".homepage-slides").on("translated.owl.carousel", function() {
            $(".slide-text h1, .slide-text .boxed-btn").addClass("animated fadeInUp").css("opacity", "1");
            $(".slide-text .social-links, .slide-text h3").addClass("animated fadeInDown").css("opacity", "1");
        });

        $(".homepage-slides").on("translate.owl.carousel", function() {
            $(".slide-text h1, .slide-text .boxed-btn").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slide-text .social-links, .slide-text h3").removeClass("animated fadeInDown").css("opacity", "0");
        });

        //skillbar
        $('.skill-area h4').waypoint({
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
        //Isotope js
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


        //Magnificpopup
        $(".preview-icon").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        //Testimonial
        $(".testimonial-list").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true
        });

        //Sticky header
        $(".header-area").sticky({
            topSpacing: 0
        });

        //Scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 70
        });

        //Smooth scroll
        $("li.smooth-scroll a, a.smooth-scroll, .hero-text .bordered-btn, .slide-text .bordered-btn").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '70';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        //Mobile Menu Active
        $(".navbar-toggle").on('click', function() {
            $("body").addClass("mobile-menu-activated");
        });

        $(".mainmenu ul li a").on('click', function() {
            $(".navbar-collapse").removeClass("in");
        });

        //select color chooser
        $("#colors li").on('click', function() {
            $("#colors li").removeClass("active");
            $(this).addClass("active");
        });


    });

    jQuery(window).load(function() {

        //Isotope
        $(".portfolio-projects").isotope();

        //Preloader
        $(".site-spinner-wrap").fadeOut(5000);

        //Scroll To Top .    
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

}(jQuery));