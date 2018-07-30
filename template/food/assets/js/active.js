(function($) {
    "use strict";

    jQuery(document).ready(function($) {

      //magnificpopup image 
        $(".gellary-list a, .gellary-icon").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

      //magnificpopup  video
        $("a.video-play-btn").magnificPopup({
            type: 'video'
        });

        //testimonial
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            dots: true,
            autoplay: true,
            loop: true,
            nav: false,
            mouseDrag: false,
            touchDrag: false,

        });

         //cafe
        $(".cafe-list").owlCarousel({
            items: 4,
            dots: true,
            autoplay: true,
            loop: true,
            nav: true,
            margin: 25,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
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
 
        //blog
        $(".blog-list").owlCarousel({
            items: 3,
            dots: true,
            autoplay: true,
            loop: true,
            nav: false,
            margin: 20, 
            mouseDrag: false,
            touchDrag: false,
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

         //slider
        $(".homepage-slides").owlCarousel({
            items: 1,
            dots: true,
            autoplay: true,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,

        });
        
         $(".homepage-slides").on("translate.owl.carousel", function(){
            $(".single-slide-item h1, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slide-item .boxed-btn").removeClass("animated fadeInDown").css("opacity", "0");
            $(".single-slide-item .package-details").removeClass("animated fadeInRight").css("opacity", "0");
        });

        $(".homepage-slides").on("translated.owl.carousel", function(){
            $(".single-slide-item h1, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slide-item .boxed-btn").addClass("animated fadeInDown").css("opacity", "1");
            $(".single-slide-item .package-details").addClass("animated fadeInRight").css("opacity", "1");
        });


        //offcanvas menu
        $(".menu-icon").on('click', function() {
            $(".offcanvas-menu-wrap").addClass("show-off-canvas-menu");

        });
        $(".menu-close").on('click', function() {
            $(".offcanvas-menu-wrap").removeClass("show-off-canvas-menu");
        });

         //search bar
        $(".search-icon").on('click', function() {
            $(".search-form").toggleClass("visible");
        });

         //gellary
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
            target: ".navbar-collapse",
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

         //mobile menu
       $(".navbar-toggle").on('click', function () {
          $("body").addClass("mobile-menu-activated");
       });
         $(".mainmenu ul li a").on('click', function () {
            $(".navbar-collapse").removeClass("in")
        });

       //scrolltotop   
      $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $(".ScrollToTop").fadeIn();
            } else {
                $(".ScrollToTop").fadeOut();
            }
        });
        
        $(".ScrollToTop").click(function () {
            $("html, body").animate({scrollTop: 0}, 1000, 'easeInOutExpo');
                return false;
        });

        //date calendar picker
       $("input#date").dcalendarpicker({
         format: 'dd-mm-yyyy'
       });

      // niceselect    
      $("select").niceSelect();

      // wow js    
      new WOW().init();

    });

    jQuery(window).load(function() {

      // preloader
      $(".site-preloader-wrap").fadeOut(5000);

    });

}(jQuery));