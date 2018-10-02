(function($) {
    "use strict";

    $(document).ready(function($) {

        // Testimonial JS
        $(".testimonial-list").owlCarousel({
            margin: 30,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }

        });

        // Counter UP JS
        $(".counter").counterUp();


    });

    $(window).load(function() {

        // Menu fixed JS
        var num = 400;
        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > num) {
                $(".header-area").addClass("fixed");
            } else {
                $(".header-area").removeClass("fixed");
            }
        });

        // Preloader JS
        $(".preloader-wrap").fadeOut("5000");

    });

}(jQuery));