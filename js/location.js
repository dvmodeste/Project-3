function initMap() {
	var abidjan = {lat:5.359952, lng: -4.008256};
	var location = new google.maps.Map(document.getElementById('location'), {
		zoom: 6,
		center: abidjan
	});
	var marker = new google.maps.Marker({
		position: abidjan,
		map: location
	});
}

$(document).ready(function(){
    $('.slide').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });
  });