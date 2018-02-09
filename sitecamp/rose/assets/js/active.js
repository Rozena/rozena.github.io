(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        //Smooth Scroll JS
        $("li.smooth-scroll a").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '74';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        //bootstrap scrollspy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 80
        });

        //menu top stick
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 150) {
                $('.menu-area').addClass('menu-bg');
            } else {
                $('.menu-area').removeClass('menu-bg');
            }
        });

     

        //bootstrap mobile menu active   
        $(".navbar-toggle").click(function () {
            $("body").addClass("mobile-menu-activated")
        });
        $(".mainmenu ul li a").on('click', function () {
            $(".navbar-collapse").removeClass("in")
        });


        
    });

    jQuery(window).load(function() {




    });

}(jQuery));