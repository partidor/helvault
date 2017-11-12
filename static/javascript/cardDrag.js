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

	var lock = false;
	$('.card-holder').droppable({
		over:function(event, ui)
		{
			console.log('drag over cardDrag.js');
			if (!lock)
			{

				var b = document.getElementById("slide_deck");
				console.log(b.getElementsByClassName("card-holder").children);
				var h = b.getElementsByClassName("card-holder")[0].cloneNode();
				console.log(h);
				if (h.children.length === 0)
				{
					b.append(h);
					lock = true;
				}	
			}
		},
		out:function(event, ui)
		{
			console.log('out');
		},
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
