(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
       jQuery(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay : true,
            autoplayTimeout: 1000,
            loop: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>" ],
            mouseDrag: false,
            mousedown: false,
            mouseover: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',

        });  
        $(".homepage-slides").on("translate.owl.carousel", function(){
        $(".homepage-slide-bg h2, .homepage-slide-bg p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".factorian-btn.slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".homepage-slides").on("translated.owl.carousel", function(){
        $(".homepage-slide-bg h2, .homepage-slide-bg p").addClass("animated fadeInUp").css("opacity", "1");
        $(".factorian-btn.slide-btn").addClass("animated fadeInDown").css("opacity", "0");
        });
        
        $('#menu').slicknav();
        
        new WOW().init();
     

        $(".gellary-light-box").magnificPopup({
            type : 'image',
              gallery: {
              enabled : true,
            }
        });
        
    });
    
    jQuery(window).load(function(){
      jQuery(".preloader-spinner-wrap").fadeOut(5000);
    }); 

}(jQuery));









