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
   
        $(".slider").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            autoplay: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

         */




        $("#countdown").countdown({
          date: "06 november 2017 12:00:00", // countdown target date settings
          format: "on"
          }, function() {
              // callback function
        });

        $("#kenburnsy-bg").kenburnsy({
            fullscreen: true
        });







    });

    jQuery(window).load(function() {

      

    });

}(jQuery));