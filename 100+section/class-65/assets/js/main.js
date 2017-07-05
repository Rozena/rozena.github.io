(function ($) {
    "use strict";

    jQuery(document).ready(function($) {
        $(".project-titles li").on('click', function () {
            $(".project-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
        });
        
        
        
        $(".project-list").isotope();    
      
        
    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












