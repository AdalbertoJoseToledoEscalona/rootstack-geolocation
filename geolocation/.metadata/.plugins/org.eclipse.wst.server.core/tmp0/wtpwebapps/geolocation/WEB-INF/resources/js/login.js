/**
 * 
 */
function load(){
	var username = getUsername();
	if(username && username!=0)
	{
		location.href = "/geolocation/map";
	}
}


function login(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	//getData();
	
	setUsername(username);
	
	location.href = "/geolocation/map";
}

function getData(){
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function(e) {
	  var response = e.target.responseText;
	  console.log(response);
		alert(response);
	});
	xhr.addEventListener('error', function(e) {
	  console.error('Request error with status', e.target.status);
	});
	xhr.open('GET', 'https://coding-test.rootstack.net');
	xhr.send();
}