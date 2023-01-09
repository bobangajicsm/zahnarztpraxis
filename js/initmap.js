function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        scrollwheel: false,
        styles:
        [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":-30}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#353535"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#656565"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#505050"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#808080"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#454545"}]}]
            };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    //map.setTilt(5);

    // Multiple Markers
    var markers = [
        ['Schloßstraße 1, 12163 Berlin', 52.464772, 13.326375],
        ['Grunerstraße 20, 10179 Berlin', 52.519904, 13.414819],
        ['Bahnhofstraße 33-38, 12555 Berlin', 52.458659, 13.578760],
        ['Tauentzienstraße 1, 10789 Berlin', 52.502650, 13.341974],
        ['Breite Straße 20, 13187 Berlin', 52.570414, 13.404073]
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h5><a href="https://www.google.com/maps/place/Schlo%C3%9Fstra%C3%9Fe+1,+12163+Berlin,+Germany/@52.4647611,13.3241878,17z/data=!3m1!4b1!4m5!3m4!1s0x47a85a820721ab4f:0x181fb9ac3b3930c4!8m2!3d52.4647611!4d13.3263765" target="_blank">Schloßstraße 1, 12163 Berlin</a></h5>' +
        '<p></p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h5><a href="https://www.google.com/maps/place/Grunerstra%C3%9Fe+20,+10179+Berlin,+Germany/@52.5199023,13.4126057,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84e2203a3e705:0x2c52e8a108eb5ea4!8m2!3d52.5199023!4d13.4147944" target="_blank">Grunerstraße 20, 10179 Berlin</a></h5>' +
        '<p></p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h5><a href="https://www.google.com/maps/place/Bahnhofstra%C3%9Fe+33-38,+12555+Berlin,+Germany/@52.4584435,13.5766039,17z/data=!3m2!4b1!5s0x47a84842a944c7cb:0xb2cb7fee9dbf19ed!4m5!3m4!1s0x47a84842bcd5d9e3:0xcb466a1d178615ca!8m2!3d52.45847!4d13.5787565" target="_blank">Bahnhofstraße 33-38, 12555 Berlin</a></h5>' +
        '<p></p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h5><a href="https://www.google.com/maps/place/Tauentzienstra%C3%9Fe+1,+10789+Berlin,+Germany/@52.5024541,13.3397958,17z/data=!3m1!4b1!4m5!3m4!1s0x47a85054143f0a47:0x87c7ff75677527a0!8m2!3d52.5024541!4d13.3419845" target="_blank">Tauentzienstraße 1, 10789 Berlin</a></h5>' +
        '<p></p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h5><a href="https://www.google.com/maps/place/RATHAUS-CENTER+PANKOW,+Breite+Str.+20,+13187+Berlin,+Germany/@52.5702249,13.4019053,17z/data=!3m1!4b1!4m5!3m4!1s0x47a8526a29ad2a09:0xed3efdaef4f156e8!8m2!3d52.5702249!4d13.404094" target="_blank">Breite Straße 20, 13187 Berlin</a></h5>' +
        '<p></p>' +        '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    var iconBase = 'images/';

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: iconBase + 'map-marker.svg',
            title: markers[i][0]
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        google.maps.event.addListener(marker, 'touchend', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        //this.setZoom(11);
        google.maps.event.removeListener(boundsListener);
    });

}