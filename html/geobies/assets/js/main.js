(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
        });

        $(".play-icon").magnificPopup({
            type: 'video',
        });

       new WOW().init();
        
      $(".header-area").sticky({ topSpacing: 0, center:true, className:"hey" });  
    });


    jQuery(window).load(function () {

        $(".spinner-wrap").fadeOut(5000);

        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.scroll-to-top a').fadeIn();
            } else {
                $('.scroll-to-top a').fadeOut();
            }
        });
        $('.scroll-to-top a').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    });

}(jQuery));







