/**
 * 
 */
function getUsername(){
	return getCookie("username");
}

function setUsername(username){
	setCookie("username", username);
}

function logout(){
	setCookie("username", "");
	location.href = "/geolocation/login";
}