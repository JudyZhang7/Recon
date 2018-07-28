var jsonFile = "DATA/Cast_Crew.json";

function displayCast() {
	var request = new XMLHttpRequest();
	request.open("GET", jsonFile, false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	results += "	<div class=\"slideshow-container\">";

	for(i = 0; i< cast._cast.length; i++){
		//<!-- Slideshow container -->
		results += 	"<a href = \"profile.html?ID=" + i + "&type=cast\">";

		  //Full-width images with number and caption text
		results += "<div class=\"mySlides fade\">";
		  
		results += "<img class=\"castPic\" src=\"" + cast._cast[i]._imageURL + "\"><br>";
		results += "<div class=\"text\">" + cast._cast[i]._name + "</div>";
		results += "</div>";

		results += 	"</a>";
	}

 	  //Next and previous buttons
	results += "<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>";
	results += "<a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>";
	results += "</div>";
	results += "<br>";

		//The dots/circles
	  results += "<div style=\"text-align:center\">";
	  for(i = 0; i < 5; i ++){
		  results += "<span class=\"dot\" onclick=\"currentSlide(" + (i+1) + ")\"></span>";
	  }
	  results += "</div>";

	console.log(results);
	document.getElementById("castInfo").innerHTML += results;
}

function displayFullCast(){
	var request = new XMLHttpRequest();
	request.open("GET", jsonFile, false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	for(i = 0; i< cast._cast.length; i++){
		results += "<div class = \"center linkHoverBlack\">";
		results += 	"<a href = \"profile.html?ID=" + i + "&type=cast\">";
		results += cast._cast[i]._name;
		results += "<span class = \"italic\">" + " - " + cast._cast[i]._character + "</span>";
	    results += 	"</a><br></div>";
	}
	console.log(results);
	document.getElementById("fullCast").innerHTML += results;
	
}

function displayProfile(type, index) {
	var request = new XMLHttpRequest();
	request.open("GET", jsonFile, false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	if(type == "cast"){
	var results = ""; //store the cast members parsed
		results += "<div class = \"bio\">";
		results += "<img src=\""+ cast._cast[index]._imageURL+"\" class = \"castPic\"/>";
		results += "<div id = \"words\">"
		results += "<span class = \"name\">" + cast._cast[index]._name + "</span><br>";
		results += "<div class = \"italic medium\">" + cast._cast[index]._character + "</div>"
		results += "<div class = \"descrip\">" + cast._cast[index]._description + "</div></div></div>";
		document.getElementById("person").innerHTML += results;
	}
	else if(type == "crew"){
	var results = ""; //store the cast members parsed
		results += "<div class = \"bio\">";
		results += "<img src=\""+ cast._crew[index]._imageURL+"\" class = \"castPic\"/>";
		results += "<div id = \"words\">"
		results += "<span class = \"name\">" + cast._crew[index]._name + "</span><br>";
		results += "<div class = \"italic medium\">" + cast._crew[index]._position + "</div>"
		results += "<div class = \"descrip\">" + cast._crew[index]._bio + "</div></div></div>";
		document.getElementById("person").innerHTML += results;
	}
}

function displayCrew(){
	var request = new XMLHttpRequest();
	request.open("GET", jsonFile, false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	for(i = 0; i< cast._crew.length; i++){
		results += "<div id = \"crewInfo\">"
		results += "<a href = \"profile.html?ID=" + i + "&type=crew\">";
		results += "<img src=\""+ cast._crew[i]._imageURL+"\" class = \"crewPic\"/><br>";
		results += "<h2> " + cast._crew[i]._name + "</h2>";
		results += "<span class = \"italic\">" + " - " + cast._crew[i]._position + "</span>";
	    results += 	"</a><br></div>";
	}
	console.log(results);
	document.getElementById("crewInfo").innerHTML += results;
}
