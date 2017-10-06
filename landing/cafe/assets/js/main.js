(function($) {
    "use strict";

    $(document).ready(function() {

        //smoth menu//
        $("li.smooth-menu a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var headerH = '60';
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });

            }
        });

        //bootstrap scrollyspy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });

        //parallax bg
        $('.parallax-bg, .header-area-bg').scrolly({ bgParallax: true });

        //mobile menu active
        $(".navbar-toggle").on('click', function() {
            $("body").addClass("mobile-menu-activated")
        });

        $(".main-menu ul li a").on('click', function() {
            $(".navbar-collapse").removeClass("in");
        })

    });

    //menu scrool top stick
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 150) {
            $('#menu').addClass('menu-bg');
        } else {
            $('#menu').removeClass('menu-bg');
        }
    });

    jQuery(window).load(function() {

      
    });


}(jQuery));