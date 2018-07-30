(function($) {
    "use strict";

    jQuery(document).ready(function($) {
    
     $("#design-progressbar").circleProgress({
     	value: 0.9,
	    size: 200,
	    fill: '#29C0C6',
	    thickness: 2,
		emptyFill : '#ffffff'
     }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(90 * progress) + '<i>%</i>');
  });

     $("#graphic-progressbar").circleProgress({
     	value: 0.95,
	    size: 200,
	    fill: '#29C0C6',
	    thickness: 2,
		emptyFill : '#ffffff'
     }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(95 * progress) + '<i>%</i>');
  });

     $("#digital-progressbar").circleProgress({
     	value: 0.84,
	    size: 200,
	    fill: '#29C0C6',
	    thickness: 2,
		emptyFill : '#ffffff'
     }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progress-percentage').html(Math.round(84 * progress) + '<i>%</i>');
  });





    });
    
    jQuery(window).load(function(){
     
        
        
        
    }); 

}(jQuery));












