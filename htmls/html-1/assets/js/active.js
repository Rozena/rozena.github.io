(function($) {
    "use strict";

    $(document).ready(function($) {

        $(".testimonial-list-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });

        $(".sc-list-inner").on('click', function() {

            var copydata = $(this).children('.sc-data').text();
            var copyprice = $(this).children('.sc-price').text();
            $(this).parents('.card').find('.new-data').text(copydata);
            $(this).parents('.card').find('.new-price').text(copyprice);
            $(this).parents('.card').find('.btn-link').removeClass('collapsed').attr('aria-expanded', false);
            $(this).parents('.collapse').removeClass('show');
        });

        $('select').niceSelect();

    });

    $(window).load(function() {


    });

}(jQuery));