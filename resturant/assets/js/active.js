(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".main-slider").owlCarousel({
            items:1,
            autoplay:false,
            margin:0,
            nav:true,
            loop:true,
            navText:["<i class='fa fa-angle-left'></i>"," <i class='fa fa-angle-right'></i>"]
            
        });
        
        $("#traffic-menu").slicknav({
            prependTo: '.mobile-menu-wrap',
            allowParentLinks: true    

         });
        
        $(".art-img-carousel").owlCarousel({
        	items: 1,
        	loop:true,
        	nav: true,
        	navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        	autoplay: false	

        });
        

      $('select').niceSelect();


        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












