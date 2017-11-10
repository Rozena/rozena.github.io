(function($) {
    "use strict";

    jQuery(document).ready(function($) {

		$("#countdown").countdown({
		      date: "01 july 2018 12:00:00", // countdown target date settings
		      format: "on"
		      }, function() {   
		});

       $(".ajaxchimp-form").ajaxChimp({
            url:'https://netlify.us16.list-manage.com/subscribe/post?u=c2469184e53e2b2f2c0ec5601&amp;id=6d85e55c85'
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












