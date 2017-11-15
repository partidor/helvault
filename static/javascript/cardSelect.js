$(document).ready(function () {
	var d = new Date();
	$('.card-click').on('click',function(e){

		if (e.shiftKey)
		{
			if ($(this).parent().hasClass('card-holder'))
			{
				$(this).parent().remove();
			}
		}
		else
		{
			var oracle_text = $(this).attr('oracle');
			$('#oracle-text-box').html(oracle_text);

			var large_img = $(this).attr('src');
			$('#large-image-box').attr('src', large_img+d.getTime());

			if($(this).parent().hasClass('card-holder')){
				$(this).parent().addClass('card-selected');
				$(this).parent().siblings('.card-selected').addClass('card-holder');
				$(this).parent().siblings().removeClass('card-selected');
			}
		}

	});
});
