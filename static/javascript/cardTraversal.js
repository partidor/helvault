//	
//	Helvault
//	File: cardTraversal.js
//	Author: Partidor
//	
//	cardTraversal.js looks for user input for manipulating the slide deck.
//
//	Inputs:
//	Right arrow 		Move to the next slide (right)
//	Spacebar 		Move to the next slide (right)
//	Left arrow		Move to the previous slide (left)
//
//	If no slide is selected, but there is a card in the slide deck, the first (left-most) card
//	is set as the selected card
//
$(document).ready(function () {
	$(document).unbind('keydown').bind('keydown', function (e) {
		var d = new Date();
		// If key pressed is Spacebar or Right Arrow, proceed to the next slide to the right
		if (e.keyCode === 0 || e.keyCode === 32 || e.keyCode === 39) {
			if (document.activeElement.nodeName.toLowerCase() != "input") 
			{
				e.preventDefault();
				var slideDeck = $('#slide_deck');
				var firstCard = slideDeck.find('.card-selected');
				var nextSlide = firstCard.nextAll('.card-holder').first();
				if (firstCard[0] != undefined) {
					if (nextSlide[0].childElementCount === 1)
					{
						// Ensure only one card is selected
						nextSlide.addClass('card-selected');
						nextSlide.siblings('.card-selected').addClass('card-holder');
						nextSlide.siblings('.card-selected').removeClass('card-selected');
						// Set oracle text and large display area
						var oracle_text = nextSlide.find('img').attr('oracle');
						var large_img = nextSlide.find('img').attr('src');
						$('#oracle-text-box').html(oracle_text);
						$('#large-image-box').attr('src', large_img);
					}
				}
				else {
					if (!firstCard[0])
					{
						firstCard = slideDeck.children('.card-holder:first');
						if (firstCard[0].childElementCount === 1)
						{
							firstCard.addClass('card-selected');
							firstCard.removeClass('card-holder');
							var oracle_text = firstCard.find('img').attr('oracle');
							var large_img = firstCard.find('img').attr('src');
							$('#oracle-text-box').html(oracle_text);
							$('#large-image-box').attr('src', large_img);
						}
					}
				}
			}
			
		}
		// Capture Left arrow
		if (e.keyCode === 37) {
			if (document.activeElement.nodeName.toLowerCase() != "input") 
			{
				e.preventDefault();
				var slideDeck = $('#slide_deck');
				var firstCard = slideDeck.find('.card-selected');
				var nextSlide = firstCard.prevAll('.card-holder').first();
				if (firstCard[0] != undefined) {
					if (nextSlide[0] != undefined && nextSlide[0].childElementCount === 1)
					{
						nextSlide.addClass('card-selected');
						nextSlide.siblings('.card-selected').addClass('card-holder');
						nextSlide.siblings().removeClass('card-selected');
						var oracle_text = nextSlide.find('img').attr('oracle');
						var large_img = nextSlide.find('img').attr('src');
						$('#oracle-text-box').html(oracle_text);
						$('#large-image-box').attr('src', large_img);

					}
				}
				else {
					if (!firstCard[0])
					{
						firstCard = slideDeck.children('.card-holder:first');
						if (firstCard[0].childElementCount === 1)
						{
							firstCard.addClass('card-selected');
							firstCard.removeClass('card-holder');
							var oracle_text = firstCard.find('img').attr('oracle');
							var large_img = firstCard.find('img').attr('src');
							$('#oracle-text-box').html(oracle_text);
							$('#large-image-box').attr('src', large_img);
						}
					}
				}
			}
			
		}
	});
});
