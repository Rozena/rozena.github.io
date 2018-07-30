(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
        });

        $(".screenshot-area-carousel").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
        });

        //magnificpop.
        $(".boxed-btn").magnificPopup({
            type: 'video',
        });

        //mobile menu activated.
        $(".navbar-toggle").on('click', function () {
            $("body").addClass("mobile-menu-activated")
        });

        $(".navbar-collapse ul li a").on('click', function () {
            $(".navbar-collapse").removeClass("in")
        });

       $('body').scrollspy({
           target: '.navbar-collapse',
           offset: 65,
       });


       $(".header-area").sticky({
           topSpacing: 0
       });
       // Smoot Scroll Effect
        $('li.smooth-menu a').bind('click', function(event){
            var $anchor = $(this);
            var headerHeight = '70';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')) .offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        //scroll to top .    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.scroll-to-top a').fadeIn();
            } else {
                $('.scroll-to-top a').fadeOut();
            }
        });
        $('.scroll-to-top a').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    });


    jQuery(window).load(function () {
        //preloaders
        jQuery(".mainsite-spinner-wrap").fadeOut(5000);

    });

}(jQuery));





 





