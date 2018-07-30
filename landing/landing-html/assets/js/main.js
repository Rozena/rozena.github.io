(function ($) {
    "use strict";

    jQuery(document).ready(function() {
    
      $(".theme-one-select").on('click', function() {
          $("body").addClass("theme-1").removeClass("theme-2");
          $("html").css("height", "100%");
          return false;
      });
        
      $(".theme-two-select").on('click', function() {
          $("body").addClass("theme-2").removeClass("theme-1");
          $("html").css("height", "auto");
          return false;
      });
        
        $(".mainmenu li a").on('click', function () {
            $(".mainmenu li a").removeClass("active");
            $(this).addClass("active");
        });
  

    });
    
    jQuery(window).load(function(){
     
        $(".site-preloader-wrap").fadeOut(5000);
        
        
    }); 

}(jQuery));












