/**
 * 
 */
var lat = 0;
var lng = 0;

function load(){
	var username = getUsername();
	if(!(username && username!=0))
	{
		location.href = "/geolocation/login";
	}else{
		document.getElementById("username").innerHTML = "Username: " + username;
	}
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    document.getElementById("error").innerHTML = "Geolocation is not supported by this browser.";
	//alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
	
	
	lat = position.coords.latitude;
	lng = position.coords.longitude;
	
  //document.getElementById("demo").innerHTML = "Latitude: " + lat + "<br>Longitude: " + long;

	
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("error").innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("error").innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      document.getElementById("error").innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      document.getElementById("error").innerHTML = "An unknown error occurred."
      break;
  }
}

function myMap() {
	getLocation();
	setTimeout("continueMap()", 3000)
}

function continueMap(){
	const myLatLng = { lat: lat, lng: lng };
var mapProp= {
  center:myLatLng,
  zoom:13,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Your Current Position!",
  });

}