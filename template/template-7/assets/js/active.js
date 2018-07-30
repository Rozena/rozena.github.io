(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        $("#mail-chimp").ajaxChimp({
            url:'http://netlify.us16.list-manage.com/subscribe/post?u=c2469184e53e2b2f2c0ec5601&amp;id=0d51d314af'
        });

        function countdown() {
            var now = new Date();
            var eventDate = new Date(2018, 1, 1);
            var currentTiime = now.getTime();
            var eventTime = eventDate.getTime();
            var remTime = eventTime - currentTiime;

            var s = Math.floor(remTime / 1000);
            var m = Math.floor(s / 60);
            var h = Math.floor(m / 60);
            var d = Math.floor(h / 24);

            h %= 24;
            m %= 60;
            s %= 60;

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;


            document.getElementById("days").textContent = d;
            document.getElementById("days").innerText = d;
            document.getElementById("hours").textContent = h;
            document.getElementById("minutes").textContent = m;
            document.getElementById("seconds").textContent = s;

            setTimeout(countdown, 1000);

        }

        countdown();


    });

    jQuery(window).load(function() {




    });

}(jQuery));

/*
(function($) { "use strict";
    jQuery(document).ready(function($) { $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();

        $(".mailchimp-form").ajaxChimp({ url: "http://rayhanuddin.us16.list-manage.com/subscribe/post?u=3a860ef41d2f97e996189bc1a&amp;id=d172e92f46" });

        $(".clock").countdown("2018/12/10", function(event) { $(this).html(event.strftime('<span class="countdown-wrapper"><span class="single-countdown-inner">%w <br><span>weeks</span></span><span class="single-countdown-inner">%d <br><span>days</span></span><span class="single-countdown-inner">%H <br><span>hours</span></span><span class="single-countdown-inner">%M <br><span>minutes</span></span><span class="single-countdown-inner">%S <br><span>seconds</span></span></span>')) }) });
    jQuery(window).load(function() {}) })(jQuery); */