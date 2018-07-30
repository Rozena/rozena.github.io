(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".feature-carousel-list").owlCarousel({
            margin: 20,
            autoplay: false,
            nav: true,
            loop: true,
            dots: false,
            navText: ["<i class='fa fa-long-arrow-left'></i>", " <i class='fa fa-long-arrow-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },

                1199: {
                    items: 4
                }
            }
        });

        $(".search-bar").on('click', function() {
            $(".saerch-form").toggleClass("active");
        })
        //Magnificpopup JS
        $(".feature-stories, .human-icon").magnificPopup();


        //menu top stick
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 150) {
                $('.header-area').addClass('fixed-bg');
            } else {
                $('.header-area').removeClass('fixed-bg');
            }
        });


        //bootstrap mobile menu active   
        $(".navbar-toggle").click(function() {
            $("body").addClass("mobile-menu-activated")
        });




    });

    jQuery(window).load(function() {




    });

}(jQuery));