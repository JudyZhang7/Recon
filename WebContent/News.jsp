<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="Menubar.jsp"%> 

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="ReconJavaScript.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body class = "content">
<div id = twitter-timeline>
<a class="twitter-timeline" href="https://twitter.com/reconwebseries?ref_src=twsrc%5Etfw">Tweets by reconwebseries</a> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</a>
</div>
<h2>News</h2>
	<div include_HTML="SocialMedia.html"></div>
	<script>includeHTML()</script>
</body>
</html>