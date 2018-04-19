function initMap() {
	var uluru = {lat:5.359952, lng: -4.008256};
	var map = new google.maps.Map(document.getElementById('location'), {
		zoom: 6,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

$(document).ready(function(){
    $('.slide').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });
  });