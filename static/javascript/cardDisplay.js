$(document).ready(function () {
	$("#scryfall_search_box").keypress(function(e){
		if(e.which == 13){
			var search_query = $(this).val();

			$.ajax({
				url: "/search",
				type: "get",
				data: {jsdata: search_query},
				success: function(response) {
					$("#place_for_cards").html(response);
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