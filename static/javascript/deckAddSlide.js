$(document).ready(function () {
	console.log('deck adder loaded');
	$('#slide_deck').bind('dragover', function() {
		console.log('drag over')
		var blankHolder = $('#slide_deck').find('.card-holder').clone();
		console.log(blankHolder);
		
	});
	$('#slide_deck').bind('dragleave', function() {
		console.log('drag leave');	
	});
});
