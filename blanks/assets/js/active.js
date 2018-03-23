(function($) {
    "use strict";

    jQuery(document).ready(function($) {   

        $(".portfolio-wrap").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });


        // Ajax Contact Form
        var form = $('#signUpForm');
        form.on('submit', function(e){
            e.preventDefault();
            $('#signUpForm .form-submit').addClass('loading');
            $.ajax({
                url: "https://formspree.io/rrrozyislam@gmail.com", 
                method: "POST",
                data: {
                    FirstName: $('#fName').val(),
                    LastName: $('#lName').val(),
                    Email: $('#email').val(),
                    Tel: $('#tel').val(),
                    Number: $('#number').val(),
                    URL: $('#url').val(),
                    Message: $('#message').val()
                },
                dataType: "json"
            }).done(function(){
                $('#fName').val(),
                $('#lName').val(),
                $('#email').val(),
                $('#tel').val(),
                $('#number').val(),
                $('#url').val(),
                $('#message').val()

                document.querySelector('#form-modal .modal-content').innerHTML = `
                    <div class="thanks-box-content text-center">
                        <i class="fa fa-check"></i>
                        <p>You inquiry has been submitted. We will get back to you shortly</p>
                        <a href="#" class="boxed-btn closeModal" data-dismiss="modal">Close!</a>
                    </div>
                `;

                $('#form-modal').addClass('in').css('display', 'block');
                $('#signUpForm .form-submit').removeClass('loading');
                closeModal();
            }).fail(function(){
                document.querySelector('#form-modal .modal-content').innerHTML = `
                    <div class="thanks-box-content text-center">
                        <i class="fa fa-window-close" style="color: #a94442;"></i>
                        <p>Sorry! Your Message has not Submited!</p>
                        <a href="#" class="boxed-btn closeModal" data-dismiss="modal">Close!</a>
                    </div>
                `;                
                $('#form-modal').addClass('in').css('display', 'block');
                $('#signUpForm .form-submit').removeClass('loading');
                closeModal();
            }); 
        });
        function closeModal() {
            $('.closeModal').on('click', function(e){
                e.preventDefault();
                $('#form-modal').removeClass('in').css('display', 'none');
            });
        }

        // Youtube Video
        $('#videoPlay').load( function() {
            $('#videoPlay').contents().find("head")
              .append($("<style type='text/css'>  body{margin:0;}  </style>"));
        });     

        //Smooth scroll
        $(".hero-text .boxed-btn, .dominate-service-area .boxed-btn").bind('click', function(event) {
            var $anchor = $(this);
            var headerHeight = '0';
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerHeight + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });

        
    });
    
    jQuery(window).load(function(){
     
        
        
    }); 

}(jQuery));












