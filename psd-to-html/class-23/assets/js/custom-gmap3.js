var rozy = [23.985896, 90.3859657];
$('.map')
      .gmap3({
        center:rozy,
        zoom:12,
        scrollwheel: false,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      })
        .marker({
            position: rozy,
            icon: "assets/images/marker.png"
        })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#939292"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#F2F2F2"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#F2F2F2"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#28AE5F"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#28AE5F"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#F5F5F5"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#F5F5F5"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      );

 