//	
//	Helvault
//	File: cardDrag.js
//	Author: Partidor
//
//	cardDrag.js handles drag and drop events for cards in the Card Display area 
//	and the Slide Deck area.
//
//	Notable classes:
//	.card-draggable		A card object that is draggable (Most cards except Large Display Card) 
//	.card-draggable-deck	A card object that is draggable and in the Slide Deck area
//	.card-holder		An invisible area of the slide deck where card objects can be dropped
//	.card-spacer		A visible object that seperated .card-holders, allowing users to see
//				where cards should be dropped
//	.card-selected		A helper class that adds an orange outline to the currently selected card
//				*note: selected card is the card being displayed in the Large Display
//
$(document).ready(function () {
	$('.card-draggable').draggable({
		helper:"clone",
		revert:"invalid",
		scroll:false,
		containment:"document",
		appendTo:"body",
		zIndex:1000,
		tolerance:"touch"
	});	

	$('.card-draggable-deck').draggable({
		helper:"clone",
		revert:"invalid",
		scroll:false,
		containment:"document",
		appendTo:"body",
		zIndex:1000
	});	

	$('.card-holder').droppable({
		drop:function(event, ui) 
		{
			// Find the slide deck
			var b = $('#slide_deck')
			// Find the next .card-spacer object
			var s = b.children().next('.card-spacer')[0].cloneNode();
			// Find the next .card-holder that is not selected - avoids multiple orange borders
			var h = b.children().next('.card-holder:not(.card-selected)')[0].cloneNode();
			// Clone the dragged card so it isnt removed from the Card Display area
			ui.draggable = ui.draggable.clone();
			if($(this).find('img').length)
			{
				// A card is already here! Replace it
				$(this).find('img').replaceWith($(ui.draggable));
				$(this).find('img').removeClass('card-draggable');
				$(this).find('img').addClass('card-draggable-deck');
			}
			else
			{
				// Add a card to the Slide Deck, and add a new empty .card-holder space
				$(this).append($(ui.draggable));
				$(this).find('img').removeClass('card-draggable');
				$(this).find('img').addClass('card-draggable-deck');
				// Add holder
				$(this).after(h);
				// Add spacer
				$(this).after(s);
			}
			// Reload card manipulation scripts 
			$.getScript('/static/javascript/cardSelect.js');
			$.getScript('/static/javascript/cardDrag.js');
		}
	});

	$('.card-spacer').droppable({
		// While hovering over a .card-spacer element, create a new holder and spacer object
		// We do this to allow the user to drag and drop a card between other card objects
		// in the Slide Deck
		over:function(event, ui)
		{

			// Find the slide deck
			var b = $('#slide_deck')
			// Find a spacer
			var s = b.children().next('.card-spacer')[0].cloneNode();
			// Find an unselected holder
			var h = b.children().next('.card-holder:not(.card-selected)')[0].cloneNode();

			// Place spacer and holder after the currently hovered spacer
			$(this).after(s);
			$(this).after(h);
			// Reload card manipulation scripts
			$.getScript('/static/javascript/cardSelect.js');
			$.getScript('/static/javascript/cardDrag.js');
			
		},
		// The user decided to not drop a card between holders, remove the created holder and spacer
		out:function(event, ui)
		{
			$(this).nextAll('.card-spacer').first().remove();
			$(this).nextAll('.card-holder').first().remove();

		},
		// The user dropped the card! Add the card to the new holder
		drop:function(event, ui)
		{
			//add element between
			ui.draggable = ui.draggable.clone();

			$(this).nextAll('.card-holder').first().append($(ui.draggable));
			$(this).nextAll('.card-holder').first().find('img').removeClass('card-draggable');
			$(this).nextAll('.card-holder').first().find('img').addClass('card-draggable-deck');
		
			// Reload card manipulation scripts
			$.getScript('/static/javascript/cardSelect.js');
			$.getScript('/static/javascript/cardDrag.js');

		}
	});

});
