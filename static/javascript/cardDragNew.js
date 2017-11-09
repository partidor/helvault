$(document).ready(function () {
	$('.card-draggable').draggable({
		helper:"clone",
		containment:"document"
	});	

	$('.card-holder').droppable({
		drop:function(event, ui) 
		{
			ui.draggable.detatch().appendTo($(this));     
		}
	});
});
