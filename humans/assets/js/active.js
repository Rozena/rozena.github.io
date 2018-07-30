(function($) {
    "use strict";

    jQuery(document).ready(function($) {
   
        $(".feature-carousel-list").owlCarousel({
        items: 4,
        margin:20,
        autoplay: false,
        nav: true,
        loop: true,
        dots: false,
        navText:["<i class='fa fa-long-arrow-left'></i>", " <i class='fa fa-long-arrow-right'></i>"]
        });
 	
    	$(".search-bar").on('click', function() {
   			$(".saerch-form").toggleClass("active");
    	})
         //Magnificpopup JS
        $(".stories-icon").magnificPopup({
            mainClass: "animated zoomIn"
		});
      

        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












