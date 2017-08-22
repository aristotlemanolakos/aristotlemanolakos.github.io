function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#da2424"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#6341db"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#4c1ebb"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#d3d7de"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#ed8b6b"},{"visibility":"on"}]},{"featureType":"poi","elementType":"labels","stylers":[{"hue":"#0039ff"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#acc036"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#2f00ff"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"color":"#0b064c"},{"lightness":"20"},{"saturation":"25"},{"weight":"0.4"},{"gamma":"1.00"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#b0581b"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46d1ec"},{"visibility":"on"}]}]
    };

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(0);
        
    // Multiple Markers
    var markers = [
        ['ACL Festival', 30.267332,-97.767709, 'parking'],
        ['Austin Motel', 30.251595,-97.749416, 'info'],
        ['Embassy Suites', 30.258571,-97.746949],
        ['Hyatt Regency', 30.260489,-97.74667],
        ['Four Seasons Hotel', 30.261647,-97.74227],
        ['Radisson', 30.262801,-97.743854],
        ['Hampton Inn & Suites Downtown', 30.263925,-97.741877],
        ['The Westin', 30.26662,-97.740375],
        ['Hilton Garden Inn Austin Downtown', 30.265212,-97.735755],
        ['The Driskill', 30.268538,-97.741633],
        ['Hotel Indigo', 30.269131,-97.736613]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>ACL Festival</h3>' +  '</div>'],
        ['<div class="info_content">' +
        '<h3>Palace of Westminster</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Embassy Suites</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hyatt Regency</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Four Seasons Hotel</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Radisson</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hampton Inn & Suites Downtown</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>The Westin</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hilton Garden Inn Austin Downtown</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>The Driskill</h3>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Hotel Indigo</h3>' +
        '</div>']
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
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
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}
