(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: false

        });
        $(".logo-carousel").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false

        });




    });

    jQuery(window).load(function() {



    });

}(jQuery));