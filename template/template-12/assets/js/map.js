
var myCenter = new google.maps.LatLng(23.810332,90.412518); // given the latitude and logitude
function initialize() {
    var mapProp = {
        center: myCenter,
        scrollwheel: false,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
                "featureType": "landscape",
                "stylers": [{
                    "saturation": -100
            }, {
                    "lightness": 70
            }, {
                    "visibility": "on"
            }]
            },{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#F99609"
                }, {
                    "lightness": 20
                }]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "saturation": -100
            }, {
                    "lightness": 51
            }, {
                    "visibility": "simplified"
            }]
        }, {
                "featureType": "road.highway",
                "stylers": [{
                    "saturation": -100
            }, {
                    "visibility": "simplified"
            }]
        }, {
                "featureType": "road.arterial",
                "stylers": [{
                    "saturation": -100
            }, {
                    "lightness": 30
            }, {
                    "visibility": "on"
            }]
        }, {
                "featureType": "road.local",
                "stylers": [{
                    "color": "#F99609"
            }, {
                    "visibility": "off"
            }]
        }, {
                "featureType": "transit",
                "stylers": [{
                    "saturation": -100
            }, {
                    "visibility": "simplified"
            }]
        }, {
                "featureType": "administrative.province",
                "stylers": [{
                    "visibility": "off"
            }]
        }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
            }, {
                    "color": "#F99609"
            }]
        }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f1f1f1"
            }, {
                    "visibility": "on"
            }]
        }]
    };
    var map = new google.maps.Map(document.getElementById("GoogleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: "assets/images/map-marker.png", //map marker
        animation: google.maps.Animation.BOUNCE, //map animation
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);