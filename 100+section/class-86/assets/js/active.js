
(function($) {
    "use strict";

    jQuery(document).ready(function($) {
            
       /*var huh  = new Date(Date.UTC(2017, 9, 11, 6, 57, 10));
        var duh  = new Date();
        var wha  = huh.getTime()/1000 - duh.getTime()/1000;

        var clock = $('.clock').FlipClock(wha, {
            clockFace: 'DailyCounter',
            countdown: true
        });
        */

        $(".testimonial-carousel").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:false,
            navText:["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
            
        });

    });
    
    jQuery(window).load(function(){
     
        

        
    }); 

}(jQuery));













