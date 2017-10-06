(function($) {
    "use strict";

    jQuery(document).ready(function($) {
      //slider js
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoply: true,
            navText: ["<i class=\'fa fa-long-arrow-left\'></i>", "<i class=\'fa fa-long-arrow-right\'></i>"],
            mouseDrag: false,

        });

        //slider animation js
        $(".homepage-slides").on("translated.owl.carousel", function() {
            $(".slide-text-tablecell p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide-item img").addClass("animated fadeInRight").css("opacity", "1");
        });
        $(".homepage-slides").on("translate.owl.carousel", function() {
            $(".slide-text-tablecell p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide-item img").removeClass("animated fadeInRight").css("opacity", "0");
        });

        //wow js
        new WOW().init();

        //owlcarousel js
        $(".product-promotions-wrap").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoply: true,
        });

        //masonry js
        $(".product-list").masonry();

        //offcanvas menu js
        $(".menu-trigger").on("click", function() {
            $(".ofcanvar-menu, .offcanvar-overlay").addClass("active");
            return false;
        });

        $(".menu-close, .offcanvar-overlay").on("click", function() {
            $(".ofcanvar-menu, .offcanvar-overlay").removeClass("active");
        });


        //search js
        $(".search-trigger").on('click', function() {
            $(".search-form").toggleClass("active");
        });

        //scroll to top .    
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $(".scrolltotop a").fadeIn();
            } else {
                $(".scrolltotop a").fadeOut();
            }
        });
        $(".scrolltotop a").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    });

    jQuery(window).load(function() {

      // preloader js
        $(".site-spinner-wrap").fadeOut(5000);
    });

}(jQuery));