(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $("#countdown").countdown({
          date: "01 july 2018 12:00:00", // countdown target date settings
          format: "on"
          }, function() {
              
        });




    });

    jQuery(window).load(function() {

        $(".site-preloader-wrap").fadeOut(5000);


    });

}(jQuery));