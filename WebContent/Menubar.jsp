<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="ReconJavaScript.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="CSS/Menubar.css" />
<link rel="stylesheet" type="text/css" href="CSS/General.css" />
<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<!-- HEADER -->
<a href = "Home.jsp">
	<div id = "header"> /[RECON TEMP]
	<img src = "">
	</div>
</a>
<!-- MENU BAR -->
<div class = "navbar">
	<ul>
	  <li><a href="Home.jsp" id = "home">Home</a></li>
	  <li><a href="Episodes.jsp" id = "episodes">Episodes</a></li>
	  <li><a href="About.jsp" id = "about">About</a></li>
	  <li><a href="Cast.jsp" id = "cast">Cast</a></li>
	  <li><a href="Crew.jsp" id = "crew" >Crew</a></li>
	  <li><a href="News.jsp" id = "news">News</a></li>
	  <li><a href="Social.jsp" id = "social">Social</a></li>
	  <li>
		  <form id = "search">
		  	<input id = "searchBox" type = "text" placeholder = "Search" name = "searchName" value ="${param.searchName!=null? param.searchName : ''}">
		  	<i id="favIcon" class="fa fa-search" ></i>
		  </form>
	  </li>
	</ul>
</div>
<!-- END -->
</body>
</html>