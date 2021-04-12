<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Map</title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/map.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/cookies.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/username.js"></script>
</head>
<body onload="load();">
	<div id="error"></div>
	<div style="text-align: right; font-weight: bold;" id="username"></div>
	<div style="text-align: right"><a href="javascript: logout();">Logout</a></div>
	<h1>Google Map</h1>

<div id="googleMap" style="width:100%;height:400px;"></div>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQk5dMzZU6-L64vKp1_E6TYt_efp0Uru0&callback=myMap"></script>
	
</body>
</html>