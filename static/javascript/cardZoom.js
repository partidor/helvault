$(document).ready(function () {
	var x = document.getElementsByClassName("zoom");

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
