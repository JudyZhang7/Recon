<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="Menubar.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="ReconJavaScript.js"></script>
<link rel="stylesheet" type="text/css" href="CSS/Profile.css" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Profile</title>
<script type="text/javascript">
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	}
</script>

</head>
<body class = "content">
<div include_HTML="Menubar.html"></div>
	<div id = "person"></div>
	<script>
		var index = getQueryVariable("ID"); 
		console.log("index: " + index);
		displayProfile(index);
	</script>
	
	<div include_HTML="SocialMedia.html"></div>
	<script>includeHTML()</script>
	
</body>
</html>