(function($) {
    "use strict";

    jQuery(document).ready(function() {
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,
            loop: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],
            mouseDrag: false,
            mouseover: false,
        });

        $(".homepage-slides").on("translated.owl.carousel", function() {
            $(".single-homepage-slide h1, .single-homepage-slide .slide-btn").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-homepage-slide p").addClass("animated fadeInDown").css("opacity", "1");

        });

        $(".homepage-slides").on("translate.owl.carousel", function() {
            $(".single-homepage-slide h1, .single-homepage-slide .slide-btn").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-homepage-slide p").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".navbar-toggle").on('click', function() {
            $("body").addClass("mobile-menu-activated")
        });

        $(".mainmenu ul li a").on('click', function() {
            $(".navbar-collapse").removeClass("in")
        });

        //Scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 83
        });

        //essing effect menu//
        $("li.smooth-menu a").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '83';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        $(".navbar-collapse").on('click', function() {
            $("body").addClass("mobile-menu-activated")
        });
        new WOW().init();

        $(".search-icon").on('click', function() {
            $(".search-form").toggleClass("active");
        });

        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $(".header-area").addClass('sticky');
            } else {
                $(".header-area").removeClass('sticky');
            }
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        $('.scrollToTop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });


    });



    jQuery(window).load(function() {

        $(".education-spinner-wrap").fadeOut(5000);

    });

}(jQuery));