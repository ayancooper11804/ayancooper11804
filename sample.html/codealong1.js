//create paragraph
var paragraph = document.createElement("p");
paragraph.innerHTML = "You can write whatever you want(This is what goes in your paragraph)"; 
var videoBanner = document.getElementById("videoBanner");
videoBanner.appendChild(paragraph);

//adding new header
var newHeader = document.createElement("h2");
newHeader.innerHTML = "Ladies and Gentlemen";
videoBanner.insertBefore(newHeader, paragraph);

//removing stuff
videoBanner.removeChild(paragraph);
videoBanner.removeChild(newHeader);

videoBanner.addEventListener("click", myEventHandler);
function myEventHandler() {
	alert("hey man don't go around clicking stuff");
}