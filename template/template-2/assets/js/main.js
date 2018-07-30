(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
              
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
       
        }); 
        
        $(".homepage-slides").on("translated.owl.carousel", function() {
            $(".slide-text h3, .slide-text .filled-btn").addClass("animated fadeInUp").css("opacity, 1");
            $(".slide-text h1").addClass("animated fadeInDown").css("opacity, 1");
        });
        
        $(".homepage-slides").on("translate.owl.carousel", function() {
            $(".slide-text h3, .slide-text .filled-btn").removeClass("animated fadeInUp").css("opacity, 0");
            $(".slide-text h1").removeClass("animated fadeInDown").css("opacity, 0");
        });
        
        
       $(".header-area").sticky({
            topSpacing: 0
        });
        
      //bootstrap scrollspy
      $("body").scrollspy({
          target: '.navbar-collapse',
          offset: 56,
      });
        
     $('li.smooth-menu a').bind('click', function (event) {
         var $anchor = $(this);
         var headerHeight = '52';
         $('html, body').stop().animate({
             scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
         }, 1200, 'easeInOutExpo');
         event.preventDefault();
     }); 
       
     $('a.scroll-top-about').bind('click', function (event) {
         var $anchor = $(this);
         var headerHeight = '50';
         $('html, body').stop().animate({
             scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
         }, 1200, 'easeInOutExpo');
         event.preventDefault();
     });  
        
      $(window).on('scroll', function () {
            if ($(window).scrollTop() > 150) {
                $('.header-area').addClass('sticky');
            } else {
                $('.header-area').removeClass('sticky');
            }
        });
        
        $(".blog-area").owlCarousel({
            items: 2,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                },
                1199:{
                    items:2,
                    nav:true,
                    loop:false
                }
            }
        });
        
        $(".team-member-wrap").owlCarousel({
            items: 3,
            margin: 15,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                },
                1199:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
            
        });
        
        $(".brand-logo-carousel").owlCarousel({
            items: 5,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            loop: true,
            navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:4,
                    nav:false
                },
                1199:{
                    items:5,
                    nav:true,
                    loop:false
                }
            }
        });
        
        $(".testimonial-carousel").owlCarousel({
            items: 2,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            loop: true,
            navText: ["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:2,
                    nav:false
                },
                1199:{
                    items:2,
                    nav:true,
                    loop:false
                }
            }
        });
        
        $(".video-play-btn").magnificPopup({
            type: 'video',
        });
        
        $(".project-titles li").on('click', function () {
            $(".project-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projects-list").isotope({
                filter: selector
            });
        });
        
         $('.counter').counterUp({
             delay: 10,
             time: 1000
         });
            $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.scroll-to-top a').fadeIn();
            } else {
                $('.scroll-to-top a').fadeOut();
            }
        });
        
        $('.scroll-to-top a').click(function () {
            $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
                return false;
        });
       
        var s = skrollr.init();
            $(".navbar-toggle").on('click', function () {
            $("body").addClass("mobile-menu-activated");
        });
         $(".navbar-collapse ul li a").on('click', function () {
            $(".navbar-collapse").removeClass("in")
        })    


         

    });


    jQuery(window).load(function () {

        jQuery(".projects-list").isotope();
        
        jQuery(".raees-spinner-wrap").fadeOut(5000);
        
        

    });

}(jQuery));






 





