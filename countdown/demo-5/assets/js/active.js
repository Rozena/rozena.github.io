(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        
       $('#clock').countdown('2018/01/01', function(event) {
           $(this).html(event.strftime('<span class="countdown-wrap"><span class="single-countdown-item">%w <br><span>weeks</span></span><span class="single-countdown-item">%d <br><span>days</span></span><span class="single-countdown-item">%H <br><span>hours</span></span><span class="single-countdown-item">%M <br><span>minutes</span></span><span class="single-countdown-item">%S <br><span>seconds</span></span></span>'));
       });
        
       $(".ajaxchimp-form").ajaxChimp({
       		url:'http://netlify.us16.list-manage.com/subscribe/post?u=c2469184e53e2b2f2c0ec5601&amp;id=6d85e55c85'
       }); 
    
    });
    
    jQuery(window).load(function(){
     
     $(".site-preloader-wrap").fadeOut(5000);
        
        
        
    }); 

}(jQuery));












