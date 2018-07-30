 //menu scrool top stick
    $(window).on('scroll', function (){
    if ($(window).scrollTop() > 150){
        $('#menu').addClass('menu-bg');	
    } else {
       $('#menu').removeClass('menu-bg');
    }
    }); 