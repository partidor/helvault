//	
//	Helvault
//	File: cardSelect.js
//	Author: Partidor
//
//	cardSelect.js tracks whenever a user clicks on any card object. 
//	If a card object is clicked, it's oracle text is copied to the 
//	Oracle Text area of helvault, and it's image is loaded into the
//	Large Display area for capture.
//
//	Users can also delete a card in the Slide Deck by shift-clicking 
//	the card they wish to delete
//
$(document).ready(function () {
	$('.card-click').on('click',function(e){

		// If shift is held down and we've clicked a card in a card-holder, delete it
		if (e.shiftKey)
		{
			if ($(this).parent().hasClass('card-holder'))
			{
				if ($(this).is('img'))
				{
					$(this).parent().prevAll('.card-spacer').first().remove();
					$(this).parent().remove();
				}
			}
		}
		// Otherwise, if we normally click on a card object, add its oracle text to the Oracle Text area
		// and its image to the Large Display area
		else
		{
			var oracle_text = $(this).attr('oracle');
			$('#oracle-text-box').html(oracle_text);

			var large_img = $(this).attr('src');
			$('#large-image-box').attr('src', large_img);

			// If the clicked card is in the Slide Deck, make it the selected card
			if($(this).parent().hasClass('card-holder')){
				$(this).parent().addClass('card-selected');
				$(this).parent().siblings('.card-selected').addClass('card-holder');
				$(this).parent().siblings().removeClass('card-selected');
			}
		}

	});
});
