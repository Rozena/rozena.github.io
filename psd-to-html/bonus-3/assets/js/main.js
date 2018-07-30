(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
        $(".rose-homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],
            onmousewheel:false,
            mousewheel:false,
            mousedrag: false,
            
        });
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
        
        $('.count-number span').counterUp({
            delay: 10,
            time: 5000
        });
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












