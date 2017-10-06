(function($) {
    "use strict";

    $(document).ready(function() {

        //bootstrap scrollyspy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 60
        });

     //Smooth scroll
      $("li.smooth-menu a").bind('click', function (event) {
          var $anchor = $(this);
          var headerHeight = '60';
          $("html, body").stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
          }, 1200, 'easeInOutExpo');
          event.preventDefault();
      }); 

        //parallax bg
        $('.parallax-bg, .header-area-bg').scrolly({ bgParallax: true });

        //mobile menu active
        $(".navbar-toggle").on('click', function() {
            $("body").addClass("mobile-menu-activated")
        });

        $(".main-menu ul li a").on('click', function() {
            $(".navbar-collapse").removeClass("in");
        })

  

    //menu scrool top stick
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 150) {
            $('#menu').addClass('menu-bg');
        } else {
            $('#menu').removeClass('menu-bg');
        }
    });

    //scroll to top .    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $(".scrolltotop a").fadeIn();
        } else {
            $(".scrolltotop a").fadeOut();
        }
    });

    $(".scrolltotop a").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

jQuery(window).load(function() {

    $(".main-site-wrap").fadeOut(5000);

});


}(jQuery));