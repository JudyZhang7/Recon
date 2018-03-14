function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("include_HTML");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = "Page not found.";
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("include_HTML");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}
};

function displayCast() {
	var request = new XMLHttpRequest();
	request.open("GET", "DATA/Members.json", false);
	request.send(null)
	var cast = JSON.parse(request.responseText);
	console.log(cast);
	
	var results; //store the cast members parsed
	for(i = 0; i< cast._memberList.length; i++){
		results += "<div id = bio>";
		results += "<img src=\""+ cast._memberList[i]._imageURL+"\" class = \"castPic\"/>";
		results += cast._memberList[i]._name;
		results += cast._memberList[i]._description;
	}
	console.log(results);
	document.getElementById("castInfo").innerHTML = results;
}