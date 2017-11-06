$("#scryfall_search_box").keypress(function(e){
	if(e.which == 13){
		var search_query = $(this).val();

		$.ajax({
			url: "/search",
			type: "get",
			data: {jsdata: search_query},
			success: function(response) {
				$("#place_for_cards").html(response);
			},
			error: function(xhr) {
			       	console.log("Search Error!!")
			       }
		});
	}
});
