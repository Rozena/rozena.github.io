(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        $(".gellary-list a, .gellary-icon").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $("a.video-play-btn").magnificPopup({
            type: 'video'
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            dots: true,
            autoplay: false,
            loop: true,
            nav: false

        });

        $(".cafe-list").owlCarousel({
            items: 4,
            dots: true,
            autoplay: false,
            loop: true,
            nav: true,
            margin: 25,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive : {
            0 : {
              items:1
            },
            768 : {
              items:2 
            },
            992 : {
              items:3 
            }
        }

        });

        $(".blog-list").owlCarousel({
            items: 3,
            dots: true,
            autoplay: false,
            loop: true,
            nav: false,
            margin: 20,
            responsive : {
            0 : {
              items:1
            },
            768 : {
              items:2 
            },
            992 : {
              items:3 
            }
        }

        });

        $(".homepage-slides").owlCarousel({
            items: 1,
            dots: true,
            autoplay: true,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

        });

        $(".menu-icon").on('click', function() {
            $(".offcanvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-overlay").addClass("active");

        });

        $(".menu-close").on('click', function() {
            $(".offcanvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-overlay").removeClass("active");
        });

        $(".search-icon").on('click', function() {
            $(".search-form").toggleClass("visible");
        });


        $(".food-gellary-titles li").on('click', function() {
            $(".food-gellary-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".gellary-lists").isotope({
                filter: selector
            });
        });

        //sticky header
        $(".header-area").sticky({
            topSpacing: 0,
            Zindex:99
        });

          
        //scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 70,
        });

        //smooth scroll
        $("li.smooth-menu a").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '66';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        }); 

       $(".navbar-toggle").on('click', function () {
          $("body").addClass("mobile-menu-activated");
       });
         $(".mainmenu ul li a").on('click', function () {
            $(".navbar-collapse").removeClass("in")
        });


      $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $(".ScrollToTop").fadeIn();
            } else {
                $(".ScrollToTop").fadeOut();
            }
        });
        
        $(".ScrollToTop").click(function () {
            $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
                return false;
        });

        $(".site-preloader-wrap").fadeOut(5000);


       $("input#date").dcalendarpicker({
         format: 'dd-mm-yyyy'
       });

      $("select").niceSelect();

    });

    jQuery(window).load(function() {




    });

}(jQuery));