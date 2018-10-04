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

        // Menu fixed JS
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $(".header-area").addClass("fixed");
            } else {
                $(".header-area").removeClass("fixed");
            }
        });

         // Mobile Menu JS
        $(".navbar-collapse ul li a").on('click', function () {
            $(".navbar-collapse").removeClass("show")
        })    

        // Smooth Menu JS
        $("li.smooth-menu a").bind('click', function (event) {
             var $anchor = $(this);
             var headerHeight = '62';
             $("html, body").stop().animate({
                 scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
             }, 1200, 'easeInOutExpo');
             event.preventDefault();
         });

        //Magnificpop Video JS
        $(".play-icon").magnificPopup({type:'video'});


      // Scroll to top JS  
      $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $(".scroll-to-top a").fadeIn();
            } else {
                $(".scroll-to-top a").fadeOut();
            }
        });
        $(".scroll-to-top a").click(function () {
            $("html, body").animate({scrollTop: 0}, 1000, 'easeInOutExpo');
                return false;
        });


    });

    $(window).load(function() {

        // Preloader JS
        $(".preloader-wrap").fadeOut("5000");

    });

}(jQuery));