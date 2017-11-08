$(document).unbind('keypress').bind('keypress', function (e) {
if ($('#scryfall_search_box').not(':focus'))
{
	console.log("Pre IF")
	if (e.keyCode === 0 || e.keyCode === 32) {
		console.log("Post IF")
		e.preventDefault()
		//e.stopPropagation()
		var slideDeck = $('#slide_deck');
                var firstCard = slideDeck.find('.card-selected')
		var nextSlide = firstCard.next();
		console.log(firstCard);
		console.log(nextSlide);
		if (firstCard != undefined) {
			firstCard.removeClass('card-selected');
			firstCard.addClass('card-holder');
			nextSlide.addClass('card-selected');
			nextSlide.removeClass('card-holder');
		}
		else {
			slideDeck.children('div:first').addClass('card-selected');
			slideDeck.children('div:first').removeClass('card-holder');
		}
		
		
	}
}
});
