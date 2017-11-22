//
//	Helvault
//	File: cardDisplay.js
//	Author: Partidor
//
//	cardDisplay.js takes a user query from the #scryfall_search_box field on Helvault
//	and passes it to the data.py CardSearch function via the Flask /search path.
//	Once the results of CardSearch have been returned, cardDisplay.js uses AJAX
//	to dynamically load the searched cards into the Card Display window on Helvault
//

$(document).ready(function () {
	$("#scryfall_search_box").keypress(function(e){
		// Detects Return key while #scryfall_search_box is active
		if(e.which == 13){
			var search_query = $(this).val();

			$.ajax({
				url: "/search",
				type: "get",
				data: {jsdata: search_query},
				success: function(response) {
					// Load generated cards
					$("#place_for_cards").html(response);
					// Reload card manipulation scripts to grab new cards
					$.getScript('/static/javascript/cardTraversal.js');
					$.getScript('/static/javascript/cardDrag.js');
					$.getScript('/static/javascript/cardZoom.js');
					$.getScript('/static/javascript/cardSelect.js');
				},
				error: function(xhr) {
					console.log("Search Error!!")
			       }
			});
		}
	});
});
