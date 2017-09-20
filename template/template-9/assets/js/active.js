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
    
          $("#bar1").barfiller({
            barColor: '#000000',
            duration: 2000
          });
          $("#bar2").barfiller({
            barColor: '#000000',
            duration: 2000
          });
          $("#bar3").barfiller({
            barColor: '#000000',
            duration: 2000
          });
          $("#bar4").barfiller({
            barColor: '#000000',
            duration: 2000
          });
          $("#bar5").barfiller({
          	barColor: '#000000',
          	duration: 2000
          });
      
        //isotope
        $(".portfolio-titles li").on('click', function () {
            $(".portfolio-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".portfolio-projects").isotope({
                filter: selector
            });
        });

    
          $(".typed").typed({
            strings: ["web Designer", "Web Developer", "freelancer"],
            typeSpeed: 15,
            loop: true,
            backDelay: 2000
        });

        //counter
        $(".counter").counterUp({
            delay: 10,
            time: 2000
        });
        
        //magnificpopup for image
        $(".preview-icon").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });

          //testimonial
        $(".testimonial-list").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],

        });

         //sticky header
        $(".header-area").sticky({
            topSpacing: 0
        });
       
         //scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 80,
        });

         //smooth scroll
        $("li.smooth-scroll a, a.smooth-scroll").bind('click', function (event) {
            var $anchor = $(this);
            var headerHeight = '80';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        }); 

     $(".welcome-video-area").YTPlayer({
          fitToBackground: true,
          videoId: 'tO01J-M3g0U'
      });

     $(".navbar-toggle").on('click', function () {
        $("body").addClass("mobile-menu-activated");
     });

      $(".mainmenu ul li a").on('click', function () {
          $(".navbar-collapse").removeClass("in")
      });

      //scroll to top .    
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

    });
    
    jQuery(window).load(function(){
      //isotope
      $(".portfolio-projects").isotope();

      //preloader
       $(".site-spinner-wrap").fadeOut(5000);  
        
        
    }); 

}(jQuery));












