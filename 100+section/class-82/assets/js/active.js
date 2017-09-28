(function($) {
    "use strict";

    jQuery(document).ready(function($) {
    
     $(".feature-project").owlCarousel({
     	   items: 1,    
           dots: true,
           autoplay: true,
           loop: true,
           nav: false,
           animateOut:"fadeOut",
           animateIn:"fadeIn"

     	}); 
        
		$(".project-bg").ripples({
			resolution: 512,
			dropRadius: 20,
			perturbance: 0.04,
		});  

		// Automatic drops
		setInterval(function() {
			var $el = $(".project-bg");
			var x = Math.random() * $el.outerWidth();
			var y = Math.random() * $el.outerHeight();
			var dropRadius = 20;
			var strength = 0.04 + Math.random() * 0.04;
			$el.ripples('drop', x, y, dropRadius, strength);
		}, 400);




    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












