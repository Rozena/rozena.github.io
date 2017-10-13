var $ = jQuery.noConflict();
(function($) {
    "use strict";

    jQuery(document).ready(function($) {

       //slider
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
            dots:false,
            nav: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"]
        });
        
        // slider animation
        $(".homepage-slides").on("translated.owl.carousel", function () {
            $(".slide-text h1, .slide-text p").addClass("animated fadeInUp").css("opacity", "1");
            $(".slide-text .boxed-btn").addClass("animated fadeInDown").css("opacity", "1");
        });

        $(".homepage-slides").on("translate.owl.carousel", function () {
            $(".slide-text h1, .slide-text p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slide-text .boxed-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
    
        //circle progressbar
         var waypoint = new Waypoint({
          element: document.getElementById('row'),
          handler: function() {
            $("#html-progressbar").circleProgress({
                value: 0.95,
                size: 150,
                fill: '#EDDC10',
                thickness: 4,
                emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
        });

        $("#javascript-progressbar").circleProgress({
                value: 0.90,
                size: 150,
                fill: '#EDDC10',
                thickness: 4,
                emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $("#wordpress-progressbar").circleProgress({
            value: 0.75,
            size: 150,
            fill: '#EDDC10',
            thickness: 4,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(Math.round(84 * progress) + '<i>%</i>');
        });

        $("#php-progressbar").circleProgress({
            value: 0.85,
            size: 150,
            fill: '#EDDC10',
            thickness: 4,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(Math.round(84 * progress) + '<i>%</i>');
        });
        },
          offset: 'bottom-in-view'
        });

      
        //Isotope js
        $(".portfolio-titles li").on('click', function () {
            $(".portfolio-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".portfolio-projects").isotope({
                filter: selector
            });
        });

      //Typed
      $(".typed").typed({
          strings: ["web Designer", "Web Developer", "freelancer"],
          typeSpeed: 15,
          loop: true,
          backDelay: 2000
      });

      //Counter
      $(".counter").counterUp({
          delay: 10,
          time: 2000
      });

      
      //Magnificpopup
      $(".preview-icon").magnificPopup({
          type: 'image',
          gallery: {
              enabled: true
          }
      });

        //Testimonial
      $(".testimonial-list").owlCarousel({
          items: 1,
          loop: true,
          autoplay: false,
          autoplayTimeout: 5000,
          dots: true,
          nav: true,
          navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"]

      });

       //Sticky header
      $(".header-area").sticky({
          topSpacing: 0
      });
     
       //Scrollspy
      $("body").scrollspy({
          target: '.navbar-collapse',
          offset: 80
      });

       //Smooth scroll
      $("li.smooth-scroll a, a.smooth-scroll").bind('click', function (event) {
          var $anchor = $(this);
          var headerHeight = '80';
          $("html, body").stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
          }, 1200, 'easeInOutExpo');
          event.preventDefault();
      }); 

      //Video Bg
     $(".welcome-video-area").YTPlayer({
          fitToBackground: true,
          videoId:'IsLbFY7jG7s'
      });

     //Mobile Menu Active
     $(".navbar-toggle").on('click', function () {
        $("body").addClass("mobile-menu-activated");
     });

     $(".mainmenu ul li a").on('click', function () {
          $(".navbar-collapse").removeClass("in");
     });

     //Scroll To Top .    
     $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $(".scroll-to-top a").fadeIn();
            } else {
                $(".scroll-to-top a").fadeOut();
            }
        });
        $(".scroll-to-top a").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

      //Wow
      new WOW().init(); 

      $("#colors li").on('click', function() {
         $("#colors li").removeClass("active");
         $(this).addClass("active");
      });


    });
    
    jQuery(window).load(function(){
      //Isotope
      $(".portfolio-projects").isotope();

      //Preloader
      $(".site-spinner-wrap").fadeOut(5000);  
        
       
    }); 

}(jQuery));












