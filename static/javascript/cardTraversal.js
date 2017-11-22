$(document).ready(function () {
	$(document).unbind('keydown').bind('keydown', function (e) {
		var d = new Date();
		if (e.keyCode === 0 || e.keyCode === 32 || e.keyCode === 39) {
			if (document.activeElement.nodeName.toLowerCase() != "input") 
			{
				e.preventDefault();
				var slideDeck = $('#slide_deck');
				var firstCard = slideDeck.find('.card-selected');
				var nextSlide = firstCard.nextAll('.card-holder').first();
				if (firstCard[0] != undefined) {
					if (nextSlide[0].childElementCount === 1)
					{
						nextSlide.addClass('card-selected');
						nextSlide.siblings('.card-selected').addClass('card-holder');
						nextSlide.siblings('.card-selected').removeClass('card-selected');
						var oracle_text = nextSlide.find('img').attr('oracle');
						var large_img = nextSlide.find('img').attr('src');
						$('#oracle-text-box').html(oracle_text);
						$('#large-image-box').attr('src', large_img);
					}
				}
				else {
					if (!firstCard[0])
					{
						firstCard = slideDeck.children('.card-holder:first');
						if (firstCard[0].childElementCount === 1)
						{
							firstCard.addClass('card-selected');
							firstCard.removeClass('card-holder');
							var oracle_text = firstCard.find('img').attr('oracle');
							var large_img = firstCard.find('img').attr('src');
							$('#oracle-text-box').html(oracle_text);
							$('#large-image-box').attr('src', large_img);
						}
					}
				}
			}
			
		}
		if (e.keyCode === 37) {
			if (document.activeElement.nodeName.toLowerCase() != "input") 
			{
				e.preventDefault();
				var slideDeck = $('#slide_deck');
				var firstCard = slideDeck.find('.card-selected');
				var nextSlide = firstCard.prevAll('.card-holder').first();
				if (firstCard[0] != undefined) {
					if (nextSlide[0] != undefined && nextSlide[0].childElementCount === 1)
					{
						nextSlide.addClass('card-selected');
						nextSlide.siblings('.card-selected').addClass('card-holder');
						nextSlide.siblings().removeClass('card-selected');
						var oracle_text = nextSlide.find('img').attr('oracle');
						var large_img = nextSlide.find('img').attr('src');
						$('#oracle-text-box').html(oracle_text);
						$('#large-image-box').attr('src', large_img);

					}
				}
				else {
					if (!firstCard[0])
					{
						firstCard = slideDeck.children('.card-holder:first');
						if (firstCard[0].childElementCount === 1)
						{
							firstCard.addClass('card-selected');
							firstCard.removeClass('card-holder');
							var oracle_text = firstCard.find('img').attr('oracle');
							var large_img = firstCard.find('img').attr('src');
							$('#oracle-text-box').html(oracle_text);
							$('#large-image-box').attr('src', large_img);
						}
					}
				}
			}
			
		}
	});
});
