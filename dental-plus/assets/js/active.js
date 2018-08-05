(function($) {
    "use strict";

    $(document).ready(function($) {
        //slider js
        $(".slider-wrap").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        //animation slider js
        $(".slider-wrap").on("translated.owl.carousel", function() {
            $(".slider-wrap h2, .slider-wrap p").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-wrap h1, .slider-wrap .boxed-btn").addClass("animated fadeInDown").css("opacity", "1");
        });

        $(".slider-wrap").on("translate.owl.carousel", function() {
            $(".slider-wrap h2, .slider-wrap p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-wrap h1, .slider-wrap .boxed-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        // blog js
        $(".blog-list").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: false
        });

        // client js
        $(".client-list").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                480: {
                    items: 2,
                    nav: false
                },
                768: {
                    items: 3,
                    nav: false
                },
                991: {
                    items: 4,
                    nav: false
                },
                1199: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        });

        // testimonial js
        $(".testimonial-list").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },

                768: {
                    items: 1,
                    nav: false
                },
                991: {
                    items: 2,
                    nav: false
                }
            }

        });

        // select js
        $("select").niceSelect();

        // bootstrap rang slider js
        $("#ex12c").slider({ id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });

         // magnificpopup js
        $(".popup-img").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            },
            mainClass: "animated zoomIn"

        });

        // wow js
         new WOW().init({
            animateClass: 'animated'
         });


    });

    $(window).load(function() {
        //loader js
        $(".site-spinner").fadeOut(5000);
    });

}(jQuery));