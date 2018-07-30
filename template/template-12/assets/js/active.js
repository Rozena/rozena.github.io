(function($) {
    "use strict";

    jQuery(document).ready(function($) {

		$("#countdown").countdown({
		      date: "01 july 2018 12:00:00", // countdown target date settings
		      format: "on"
		      }, function() {   
		});

		
        //ScrollToTop  JS  
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                $(".scrolltotop a").fadeIn();
            } else {
                $(".scrolltotop a").fadeOut();
            }
        });
        $(".scrolltotop a").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
     







    });
    
    jQuery(window).load(function(){
     
        $(".site-preloader-wrap").fadeOut(5000);
        
        
    }); 

}(jQuery));












