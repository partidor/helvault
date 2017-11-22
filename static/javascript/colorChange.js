//	
//	Helvault
//	File: colorChange.js
//	Author: Partidor
//
//	colorChange.js allows the user to change the background color of the Large Display area
//	by entering a hex color value into the #color_input_box
//
$(document).ready(function () {
	$("#color_input_box").keypress(function(e){
		if(e.which == 13){
			var new_color = $(this).val();

			$('.style-display-image').css('background-color', new_color);


		}
	});
});
