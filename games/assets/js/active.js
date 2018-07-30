(function($) {
    "use strict";

    jQuery(document).ready(function($) {
 
         $(".participent-list-carousel").owlCarousel({
	        loop: true,
	        dots: false,
	        nav: false,
	        autoplay: false,
	        margin: 20,
	        responsive : {
			  	0 : {
			  		items: 2	
			    },
			    480 : {
			    	items: 4	
			    },
			    768 : {
			    	items: 7
			    },
			    992 : {
	        		items: 9
			    },
			    1170 : {
	        		items: 11
			    }
			}

        });
      
         $(".gun-list-carousel").owlCarousel({
	        loop: true,
	        dots: false,
	        nav: true,
	        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	        autoplay: false,
	        margin: 10,
	        responsive : {
			  	0 : {
			  		items: 2	
			    },
			    480 : {
			    	items: 3	
			    },
			    768 : {
			    	items: 5
			    },
			    992 : {
	        		items: 6
			    }
			}


        });
      
         $(".player-list-carousel").owlCarousel({
	        items: 11,
	        loop: true,
	        dots: false,
	        nav: true,
	        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	        autoplay: false,
	        margin: 10,	        
	        responsive : {
			  	0 : {
			  		items: 2	
			    },
			    480 : {
			    	items: 4	
			    },
			    768 : {
			    	items: 7
			    },
			    992 : {
	        		items: 9
			    },
			    1170 : {
	        		items: 11
			    }
			}



        });

		const ps = new PerfectScrollbar('.sidebar-admin-box');

		$('#menu').slicknav({
			prependTo:'#mobilemenu-active'
		});
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












