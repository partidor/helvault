$('.card-click').on('click',function(){

	var oracle_text = $(this).attr('oracle');
	$('#oracle-text-box').html(oracle_text);

	var large_img = $(this).attr('src');
	$('#large-image-box').attr('src', large_img);

});
