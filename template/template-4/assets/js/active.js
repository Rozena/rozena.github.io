(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        //slider
        $(".rose-homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],
            mouseDrag: false,
            mousewheel: false,

        });
        
        // slider animation
        $(".rose-homepage-slides").on("translated.owl.carousel", function () {
            $(".slide-text h4, .slide-text h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".slide-text .bordered-btn").addClass("animated fadeInDown").css("opacity", "1");
            $(".slide-text p").addClass("animated pulse").css("opacity", "1");
        });

        $(".rose-homepage-slides").on("translate.owl.carousel", function () {
            $(".slide-text h4, .slide-text h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slide-text .bordered-btn").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slide-text p").removeClass("animated pulse").css("opacity", "0");
        });

        //testimonial
        $(".testimonial-wrap").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: false,
            nav: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],
            mouseDrag: false,
            mousewheel: false,

        });

        //typed
        $(".typed").typed({
            strings: ["web Designer", "Web Developer"],
            typeSpeed: 10,
            loop: true,
            backDelay: 2000
        });

        //magnificpopup for video
        $(".video-play-btn").magnificPopup({
            type: 'video'
        });

        //ounter
        $('.count-number span').counterUp({
            delay: 10,
            time: 2000
        });

        //isotope
        $(".rose-project-titles li").on('click', function () {
            $(".rose-project-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".rose-project-lists").isotope({
                filter: selector
            });
        });

        //magnificpopup for image
        $(".project-popup").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });

        //sticky header
        $(".header-area").sticky({
            topSpacing: 0
        });

        //scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 70,
        });

        //smooth scroll
        $("li.smooth-scroll a, a.scroll-to-about").bind('click', function (event) {
            var $anchor = $(this);
            var headerHeight = '66';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        $(".navbar-toggle").on('click', function () {
            $("body").addClass("mobile-menu-activated");
        });
        $(".mainmenu ul li a").on('click', function () {
            $(".navbar-collapse").removeClass("in")
        });

        //scroll to top .    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $("a.scroll-to-top").fadeIn();
            } else {
                $("a.scroll-to-top").fadeOut();
            }
        });
        $("a.scroll-to-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        //wow js
        new WOW().init();

        $(".parallax").scrolly({bgParallax: true})

    });

    jQuery(window).load(function () {

        //isotope
        $(".rose-project-lists").isotope();

        //preloader
        $(".rose-spinner-wrap").fadeOut(5000);
    });

}(jQuery));