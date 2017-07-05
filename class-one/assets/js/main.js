(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
        
    $('.sk-progess, .sk-progess-2, .sk-progess-3').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#7FB7FA',
        radius: '15px',
    });    
  $('.sk-progess-2').LineProgressbar({ 
        percentage: 70,
        fillBackgroundColor: '#FFAC1B',
        radius: '15px',
    });
  $('.sk-progess-3').LineProgressbar({ 
        percentage: 70,
        fillBackgroundColor: '#C99AFF',
        radius: '15px',
    });
 
        
     $('.counter').counterUp({
         delay: 10,
         time: 5000
     });
        
    $(".portfolio-title li").on('click', function () {
        $(".portfolio-title li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".portfolio-list").isotope({
            filter: selector
        });
    });
        
    $(".portfolio-list").isotope();
       
    $(".portfolio-gellay").magnificPopup({
       type:'image',
       gallery: {
       enabled: true
       },
    });    
        
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        loop: true,
        autoplay: false
    });    
             
    
  $('.team-progress').LineProgressbar({ 
        percentage: 90,
        fillBackgroundColor: '#7F56FD',
        radius: '15px',
        height: 5
    });    
        
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












