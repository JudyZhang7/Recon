var jsonFile = "DATA/Cast_Crew.json";

function displayCast() {
	var request = new XMLHttpRequest();
	request.open("GET", jsonFile, false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	for(i = 0; i< cast._cast.length; i++){
		if(i == 0){
			results += " <div class=\"carousel-item active\">";
		}
		else{
			results += " <div class=\"carousel-item\">";
		}
		results += 	"<a href = \"Profile.html?ID=" + i + "&type=cast\">";
		results += 		"<img class=\"d-block w-100, castPic\" src=\""+ cast._cast[i]._imageURL+"\">";
//		results += cast._memberList[i]._name + "<br>";
//		results += "<div class = \"italic\">" + cast._memberList[i]._character + "</div>";
		results += 		"<div class=\"carousel-caption d-none d-md-block\">";
	    results += 			"<h5 class = \"shadow\">" + cast._cast[i]._name +"</h5>"
//	    results += 			"<p class = \"italic center\">" + cast._memberList[i]._character + "</p>"		
	    	results += 		"</div>";
	    results += 	"</a>";
		results += "</div>";
	}
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
		results += 	"<a href = \"Profile.html?ID=" + i + "&type=cast\">";
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
		results += "<a href = \"Profile.html?ID=" + i + "&type=crew\">";
		results += "<img src=\""+ cast._crew[i]._imageURL+"\" class = \"crewPic\"/><br>";
		results += "<h2> " + cast._crew[i]._name + "</h2>";
		results += "<span class = \"italic\">" + " - " + cast._crew[i]._position + "</span>";
	    results += 	"</a><br></div>";
	}
	console.log(results);
	document.getElementById("crewInfo").innerHTML += results;
}
