function displayCast() {
	var request = new XMLHttpRequest();
	request.open("GET", "DATA/Members.json", false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	for(i = 0; i< cast._memberList.length; i++){
		if(i == 0){
			results += " <div class=\"carousel-item active\">";
		}
		else{
			results += " <div class=\"carousel-item\">";
		}
		results += 	"<a href = \"Profile.html?ID=" + i + "\">"
		results += 		"<img class=\"d-block w-100, castPic\" src=\""+ cast._memberList[i]._imageURL+"\">";
//		results += cast._memberList[i]._name + "<br>";
//		results += "<div class = \"italic\">" + cast._memberList[i]._character + "</div>";
		results += 		"<div class=\"carousel-caption d-none d-md-block\">";
	    results += 			"<h5 class = \"shadow\">" + cast._memberList[i]._name +"</h5>"
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
	request.open("GET", "DATA/Members.json", false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	for(i = 0; i< cast._memberList.length; i++){
		results += "<div class = \"center linkHoverBlack\">"
		results += 	"<a href = \"Profile.html?ID=" + i + "\">"
		results += cast._memberList[i]._name;
		results += "<span class = \"italic\">" + " - " + cast._memberList[i]._character + "</span>";
	    results += 	"</a><br></div>";
	}
	console.log(results);
	document.getElementById("fullCast").innerHTML += results;
	
}
function displayProfile(index) {
	var request = new XMLHttpRequest();
	request.open("GET", "DATA/Members.json", false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	results += "<div class = \"bio\">";
	results += "<img src=\""+ cast._memberList[index]._imageURL+"\" class = \"castPic\"/>";
	results += "<div id = \"words\">"
	results += "<span class = \"name\">" + cast._memberList[index]._name + "</span><br>";
	results += "<div class = \"italic\">" + cast._memberList[index]._character + "</div>"
	results += "<div class = \"descrip\">" + cast._memberList[index]._description + "</div></div></div>";
	document.getElementById("person").innerHTML += results;
}
