(function($) {
    "use strict";

    jQuery(document).ready(function($) {
     
        $(".typed").typed({
        strings: ["web Designer", "Web Developer"],
        typeSpeed: 10,
        loop:true,
        backDelay: 2000
      });   
      
       $(".video-play-btn").magnificPopup({
           type: 'video'
       }); 
       
       $('.count-number span').counterUp({
            delay: 10,
            time: 2000
        }); 
        
        $(".testimonial-wrap").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: true,
            
        });
       
        
         $(".rose-project-titles li").on('click', function() {
            $(".rose-project-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".rose-project-lists").isotope({
               filter: selector 
            });
        });
        
        $(".project-popup").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        }); 
        
    });
    
    jQuery(window).load(function(){
        $(".rose-project-lists").isotope(); 
          
    }); 

}(jQuery));












