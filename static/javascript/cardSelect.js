$('.card-click').on('click',function(){

	var oracle_text = $(this).attr('oracle');
	$('#oracle-text-box').html(oracle_text);

});
