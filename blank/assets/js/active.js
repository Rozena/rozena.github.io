(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        var form = $('#signUpForm');

        form.on('submit', function(e){
            e.preventDefault();

            document.querySelector('#form-modal .modal-content').innerHTML = `
                <div class="thanks-box-content text-center">
                    <i class="fa fa-check"></i>
                    <p>You inquiry has been submitted. We will get back to you shortly</p>
                    <a href="#" class="boxed-btn"  data-dismiss="modal">Great!</a>
                </div>
            `;
        });    

        $(".portfolio-project-wrap").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 5000,
            dots: true,
            nav: true,
            navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });
        
    });
    
    jQuery(window).load(function(){
     
        
        
    }); 

}(jQuery));












