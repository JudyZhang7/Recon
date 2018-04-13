function displayCast() {
	var request = new XMLHttpRequest();
	request.open("GET", "DATA/Members.json", false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results = ""; //store the cast members parsed
	for(i = 0; i< cast._memberList.length; i++){
		results += "<a href = \"Profile.html?ID=" + i + "\">"
		results += "<div class = \"bio\">";
		results += "<img src=\""+ cast._memberList[i]._imageURL+"\" class = \"castPic\"/>";
		results += "<div class = \"overlay\">";
		results += "<div class = \"biotext\">";
		results += cast._memberList[i]._name + "<br>";
		results += "<div class = \"italic\">" + cast._memberList[i]._character + "</div>";
		results += "<div class = \"small\">Click to learn more</div>";
		results += "</div>";
		results += "</div></div>";
		results += "</a>"
	}
	console.log(results);
	document.getElementById("castInfo").innerHTML += results;
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
