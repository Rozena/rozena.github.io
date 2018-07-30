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




        $("#countdown").countdown({
          date: "01 july 2018 12:00:00", // countdown target date settings
          format: "on"
          }, function() {
              // callback function
        });

        $(".ajaxchimp-form").ajaxChimp({
            url: 'http://netlify.us16.list-manage.com/subscribe/post?u=c2469184e53e2b2f2c0ec5601&amp;id=6d85e55c85'
       }); 
    

        $(".player").mb_YTPlayer();





    });

    jQuery(window).load(function() {

        $(".preloader-wrap").fadeOut(5000);
      

    });

}(jQuery));