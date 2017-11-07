$(window).keypress(function (e) {
	if (e.keyCode === 0 || e.keyCode === 32) {
		e.preventDefault()
		var slideDeck = $('#slide_deck')
		if (slideDeck.find('.card-selected')){
			var currentSlide = slideDeck.find('.card-selected');
			console.log(currentSlide);
			currentSlide.removeClass('card-selected');
			currentSlide.addClass('card-holder');
			currentSlide.next().removeClass('card-holder');
			currentSlide.next().addClass('card-selected');
		}
		else {
			slideDeck.children(":first").addClass('card-selected');
			slideDeck.children(":first").removeClass('card-holder');
		}
		
		
	}
});
