$(document).ready(function () {
	$('.card-draggable').draggable({
		helper:"clone",
		revert:"invalid",
		scroll:false,
		containment:"document",
		appendTo:"body",
		zIndex:1000
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
			}
			$.getScript('/static/javascript/cardSelect.js');
			$.getScript('/static/javascript/cardDrag.js');
		}
	});
});
