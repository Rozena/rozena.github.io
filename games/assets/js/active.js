(function($) {
    "use strict";

    jQuery(document).ready(function($) {
 
         $(".participent-list-carousel").owlCarousel({
	        items: 11,
	        loop: true,
	        dots: false,
	        nav: false,
	        autoplay: false,
	        margin: 20

        });
      
         $(".gun-list-carousel").owlCarousel({
	        items: 7,
	        loop: true,
	        dots: false,
	        nav: true,
	        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	        autoplay: false,
	        margin: 10

        });
      
         $(".player-list-carousel").owlCarousel({
	        items: 11,
	        loop: true,
	        dots: false,
	        nav: true,
	        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	        autoplay: false,
	        margin: 10

        });
      
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












