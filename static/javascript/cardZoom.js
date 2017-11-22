//	
//	Helvault
//	File: cardZoom.js
//	Author: Partidor
//
//	cardZoom.js handles cases where cards in the Display Area overlap. If they do,
//	then hovering over a card will bring it into the foreground.
//
$(document).ready(function () {
	var x = document.getElementsByClassName("zoom");

	// Add listener events to each image
	for(i=0; i<x.length; i++){
		console.log(x[i])
		x[i].addEventListener("mouseover", incZ);
	}

	for(i=0; i<x.length; i++){
		x[i].addEventListener("mouseout", decZ);
	}

	function incZ(){
		this.style.zIndex = "500";
	}

	function decZ(elm){
		this.style.zIndex = "1";
	}
});
