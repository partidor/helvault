$(document).ready(function () {
	$("#color_input_box").keypress(function(e){
		if(e.which == 13){
			var new_color = $(this).val();

			$('.style-display-image').css('background-color', new_color);


		}
	});
});
