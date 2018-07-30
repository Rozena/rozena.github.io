(function($) {
    "use strict";

    jQuery(document).ready(function($) {
     
        //Slider 
        $(".slider-wrap").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            nav: false
        });

        //slick menu active
        $("#slick-menu").slicknav();
      
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












