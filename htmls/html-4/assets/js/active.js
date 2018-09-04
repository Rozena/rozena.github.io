(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        });

        $(".image-slide-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true

        });

        //Isotope
        $(".gellary-titles li").on('click', function() {
            $(".gellary-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".gellary-list").isotope({
                filter: selector
            });
        });

        $(".gellary-icon").magnificPopup({
            type: 'image'
        });
        //Counter
        $(".count").counterUp({
            delay: 10,
            time: 2000
        });


        //Scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 84
        });

        //Smooth scroll
        $("li.smooth-menu a").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '82';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });


        $("#spa").slicknav({
            prependTo: "#mobile-menu"
        });
        
        //Scroll To Top .    
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

        // wow js
         new WOW().init({
            animateClass: 'animated'
         });

    });

    jQuery(window).load(function() {

        $(".site-preloader-wrap").fadeOut(5000);

    });

}(jQuery));