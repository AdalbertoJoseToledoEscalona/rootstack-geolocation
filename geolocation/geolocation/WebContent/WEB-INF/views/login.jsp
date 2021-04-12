<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/login.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/cookies.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/username.js"></script>
</head>
<body onload="load();">
	<table>
		<caption><h1>LOGIN</h1></caption>
		<tr>
			<th>User Name: </th>
			<td><input type="text" name="username" id="username"></td>
		</tr>
		<tr>
			<th>Password: </th>
			<td><input type="password" name="password" id="password"></td>
		</tr>
		<tr>
			<th><input type="button" value="Submit" onClick="login();"></th>
		</tr>
	</table>
</body>
</html>