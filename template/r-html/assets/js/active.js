(function($) {
    "use strict";

    jQuery(document).ready(function($) {
      $("#bar1").barfiller({
      	barColor: "#000"
      });
      $("#bar2").barfiller({
      	barColor: "#000"
      });
      $("#bar3").barfiller({
      	barColor: "#000"
      });
      $("#bar4").barfiller({
      	barColor: "#000"
      });
      $("#bar5").barfiller({
      	barColor: "#000"
      });
        
          //isotope
        $(".project-titles li").on('click', function () {
            $(".project-titles li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
        });

        $(".project-preview").magnificPopup({
        	 type: "image",
            gallery: {
                enabled: true,
            },
            mainClass: "animated zoomIn"
        });
       
        //Testimonial Carousel JS
        $(".testimonial-carousel").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            dots: false,
            autoplay: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });


        //Logo Carousel JS
        $(".logo-carousel").owlCarousel({
            loop: true,
            margin:30,
            dots: false,
            autoplay: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }

        });

       //Counter
        $(".counter").counterUp({
            delay: 10,
            time: 2000
        });

        //Absolute Header JS
        $(window).bind('scroll', function() {
            if ($(window).scrollTop() > 300) {
                $(".absolute-header").addClass('active');
            } else {
                $(".absolute-header").removeClass('active');
            }
        });
       //Smooth Scroll JS
        $("li.smooth-menu a, .scroll-about, .promotion-area .bordered-btn").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '70';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

      //Bootstrap Scrollspy
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 75
        });

    });


    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












