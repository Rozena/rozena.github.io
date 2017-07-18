(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
        
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












