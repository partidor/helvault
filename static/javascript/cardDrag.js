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
			var b = $('#slide_deck')
			var s = b.children().next('.card-spacer')[0].cloneNode();
			var h = b.children().next('.card-holder:not(.card-selected)')[0].cloneNode();
			ui.draggable = ui.draggable.clone();
			if($(this).find('img').length)
			{
				$(this).find('img').replaceWith($(ui.draggable));
				$(this).find('img').removeClass('card-draggable');
				$(this).find('img').addClass('card-draggable-deck');
			}
			else
			{
				$(this).append($(ui.draggable));
				$(this).find('img').removeClass('card-draggable');
				$(this).find('img').addClass('card-draggable-deck');
				$(this).after(h);
				$(this).after(s);
			}
			$.getScript('/static/javascript/cardSelect.js');
			$.getScript('/static/javascript/cardDrag.js');
		}
	});

	$('.card-spacer').droppable({
		over:function(event, ui)
		{
			//add elements

			var b = $('#slide_deck')
			var s = b.children().next('.card-spacer')[0].cloneNode();
			var h = b.children().next('.card-holder:not(.card-selected)')[0].cloneNode();
			console.log(b);
			console.log(s);
			console.log(h);

			console.log('spacer over');
			console.log($(this));
			$(this).after(s);
			$(this).after(h);
			$.getScript('/static/javascript/cardSelect.js');
			$.getScript('/static/javascript/cardDrag.js');
			
		},
		out:function(event, ui)
		{
			//delete elements
			console.log('spacer out');
			$(this).nextAll('.card-spacer').first().remove();
			$(this).nextAll('.card-holder').first().remove();

		},
		drop:function(event, ui)
		{
			//add element between
			ui.draggable = ui.draggable.clone();

			$(this).nextAll('.card-holder').first().append($(ui.draggable));
			$(this).nextAll('.card-holder').first().find('img').removeClass('card-draggable');
			$(this).nextAll('.card-holder').first().find('img').addClass('card-draggable-deck');
		
			$.getScript('/static/javascript/cardSelect.js');
			$.getScript('/static/javascript/cardDrag.js');

		}
	});

});
