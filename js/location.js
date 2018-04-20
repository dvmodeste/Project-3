 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 5.359952, lng: -4.008256},
          zoom: 6
        });
		
	var marker = new google.maps.Marker({
    position: {lat: 5.359952, lng: -4.008256},
    map: map,
    title: 'Hello Abidjan!',


	draggable: true
         });
	}