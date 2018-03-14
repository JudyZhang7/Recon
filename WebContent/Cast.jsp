<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="Menubar.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="ReconJavaScript.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="CSS/Cast_Crew.css" />

<title>Cast/Crew</title>
</head>
<body class = "content">

	<div id = "castInfo"></div>
	<script>
	displayCast();
	</script>

	<div include_HTML="SocialMedia.html"></div>
	<script>includeHTML()</script>

</body>
</html>