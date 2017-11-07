$('.card-click').on('click',function(){

	var oracle_text = $(this).attr('oracle');
	$('#oracle-text-box').html(oracle_text);

	var large_img = $(this).attr('src');
	$('#large-image-box').attr('src', large_img);

	if($(this).parent().hasClass('card-holder')){
		$(this).parent().removeClass('card-holder');
		$(this).parent().addClass('card-selected');
		$(this).parent().siblings().removeClass('card-selected');
		$(this).parent().siblings().addClass('card-holder');
	}

});
