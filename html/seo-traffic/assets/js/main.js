(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
        $(".homepage-slides").owlCarousel({
           items: 1,
           dots:true,
           autoplay: true,
           loop: true,
           nav: true,
           navText: ["<i class=\"zmdi zmdi-long-arrow-left\"></i>", "<i class=\"zmdi zmdi-long-arrow-right\"></i>"], animateOut: "fadeOut",
           animateIn: 'fadeIn',    
        });
        
        $(".case-studies-carousel").owlCarousel({
           margin: 30,
           dots:true,
           autoplay: false,
           loop: true,
           nav: false,  
           responsive : {
            0 : {
              items: 1,
            },
            
            768 : {
              items: 2,
            },
    
            991 : {
              items: 3
            }
          }      
        });
        
        $(".testimonial-carousel").owlCarousel({
           items: 1,
           dots:true,
           autoplay: false,
           loop: true,
           nav: true,
           navText: ["<i class=\"zmdi zmdi-chevron-left\"></i>", "<i class=\"zmdi zmdi-chevron-right\"></i>"],  
        });
        
        $(".brand-logo-carousel").owlCarousel({
           items: 6,
           margin: 30,
           dots:false,
           autoplay: true,
           loop: true,
           nav: false,  
           responsive : {
            0 : {
              items: 2,
            },
            
            768 : {
              items: 4,
            },
    
            991 : {
              items: 6,
            }
          }  
        });
        
      $(".wide-layout").on("click", function() {
          $("body").addClass("wide-layout").removeClass("boxed-layout");
          $(".layout-changer span").removeClass("active");
          $(this).addClass("active");
      });
      $(".boxed-layout").on("click", function() {
          $("body").addClass("boxed-layout").removeClass("wide-layout");
          $(".layout-changer span").removeClass("active");
          $(this).addClass("active");
      });
        
      $(".search-trigger").on("click", function() {
          $(".search-bar-wrap").addClass("active");
      });
      $(".search-close").on("click", function() {
          $(".search-bar-wrap").removeClass("active");
      });
        
      $(".menu-trigger").on("click", function() {
          $(".off-canvas-menu").addClass("show-off-canvas-menu");
          $(".off-canvas-menu-overlay").addClass("active");
      });
      $(".menu-close, .off-canvas-menu-overlay").on("click", function() {
          $(".off-canvas-menu").removeClass("show-off-canvas-menu");
          $(".off-canvas-menu-overlay").removeClass("active");
      });
        
        
        
        $(".single-testimonial-box").hover(function() {
            $(".single-testimonial-box").removeClass('active');
            $(this).addClass('active'); 
        });
        
        
       $(".play-btn, .video-play-btn").magnificPopup({
            type:'video'  
       });
        
       $("#traffic").slicknav({
           prependTo:'#mobile-menu-wrap',
           allowParentLinks: true
       }); 
        
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












