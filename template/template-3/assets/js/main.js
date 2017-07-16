(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
        $(".case-studies-carousel").owlCarousel({
           items: 3,
           margin: 30,    
           dots: true,
           autoplay: false,
           loop: true,
           nav: false,
        });
        $(".testimonial-carousel").owlCarousel({
           items: 1,
           dots:true,
           autoplay: false,
           loop: true,
           nav: false,
        });
        
        $(".brand-logo-carousel").owlCarousel({
            items: 6,
            loop: true,
            autoplay: false,
            dots:false,
        });
        
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots:true,
            nav:true,
            navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });
        
       $(".menu-trigger").on('click', function() {
           $(".off-canvas-menu").addClass("show-off-canvas-menu");
           $(".off-canvas-menu-overlay").addClass("active");
       }) 
       $(".menu-close, .off-canvas-menu-overlay").on('click', function() {
           $(".off-canvas-menu").removeClass("show-off-canvas-menu");
           $(".off-canvas-menu-overlay").removeClass("active");
       }) 
        
      $(".search-trigger").on('click', function() {
          $(".search-form").addClass("show-search-form");
          $(".off-canvas-menu-overlay").addClass("active");
      });
      $(".off-canvas-menu-overlay, .search-close").on('click', function() {
          $(".search-form").removeClass("show-search-form");
           $(".off-canvas-menu-overlay").removeClass("active");
      });
        
       $(".single-testimonial-box").hover(function() {
            $(".single-testimonial-box").removeClass('active');
            $(this).addClass('active');
       });         
        
        $(".paly-btn").magnificPopup({
            type: 'video'
        });
        
        
        
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












