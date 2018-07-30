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
           items: 3,
           margin: 30,
           dots:true,
           autoplay: false,
           loop: true,
           nav: false,        
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
        
        
       $(".play-btn").magnificPopup({
            type:'video'  
       });
        
 
        
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












