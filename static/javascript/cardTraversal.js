$('#slide_deck').keypress(function (e) {
	if (e.keyCode === 0 || e.keyCode === 32) {
		e.preventDefault()
		var slideDeck = $('#slide_deck')
		if (slideDeck.find('.card-selected')){
			var currentSlide = slideDeck.find('.card-selected');
			var nextSlide = slideDeck.find('.card-selected').next();
			console.log(currentSlide);
			console.log(nextSlide);
			currentSlide.removeClass('card-selected');
			currentSlide.addClass('card-holder');
			nextSlide.removeClass('card-holder');
			nextSlide.addClass('card-selected');
		}
		else {
			slideDeck.children('div:first').addClass('card-selected');
			slideDeck.children('div:first').removeClass('card-holder');
		}
		
		
	}
});
