$(document).ready(function () {
	$(document).unbind('keydown').bind('keydown', function (e) {
		console.log("Pre IF")
		var d = new Date();
		if (e.keyCode === 0 || e.keyCode === 32 || e.keyCode === 39) {
			if (document.activeElement.nodeName.toLowerCase() != "input") 
			{
				console.log("Post IF")
				e.preventDefault();
				var slideDeck = $('#slide_deck');
				var firstCard = slideDeck.find('.card-selected');
				var nextSlide = firstCard.next('.card-holder');
				//console.log(firstCard);
				//console.log(nextSlide);
				if (firstCard[0] != undefined) {
					console.log(nextSlide);
					if (nextSlide[0].childElementCount === 1)
					{
						//firstCard.removeClass('card-selected');
						//firstCard.addClass('card-holder');
						nextSlide.removeClass('card-holder');
						nextSlide.addClass('card-selected');
						nextSlide.siblings().removeClass('card-selected');
						nextSlide.siblings().addClass('card-holder');
						var oracle_text = nextSlide.find('img').attr('oracle');
						var large_img = nextSlide.find('img').attr('src');
						$('#oracle-text-box').html(oracle_text);
						$('#large-image-box').attr('src', large_img+d.getTime());
					}
				}
				else {
					if (!firstCard[0])
					{
						firstCard = slideDeck.children('div:first');
						if (firstCard[0].childElementCount === 1)
						{
							firstCard.addClass('card-selected');
							firstCard.removeClass('card-holder');
							var oracle_text = firstCard.find('img').attr('oracle');
							var large_img = firstCard.find('img').attr('src');
							$('#oracle-text-box').html(oracle_text);
							$('#large-image-box').attr('src', large_img+d.getTime());
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
				var nextSlide = firstCard.prev('.card-holder');
				if (firstCard[0] != undefined) {
					console.log(nextSlide);
					if (nextSlide[0] != undefined && nextSlide[0].childElementCount === 1)
					{
						nextSlide.removeClass('card-holder');
						nextSlide.addClass('card-selected');
						nextSlide.siblings().removeClass('card-selected');
						nextSlide.siblings().addClass('card-holder');
						var oracle_text = nextSlide.find('img').attr('oracle');
						var large_img = nextSlide.find('img').attr('src');
						$('#oracle-text-box').html(oracle_text);
						$('#large-image-box').attr('src', large_img+d.getTime());

					}
				}
				else {
					if (!firstCard[0])
					{
						firstCard = slideDeck.children('div:first');
						if (firstCard[0].childElementCount === 1)
						{
							firstCard.addClass('card-selected');
							firstCard.removeClass('card-holder');
							var oracle_text = firstCard.find('img').attr('oracle');
							var large_img = firstCard.find('img').attr('src');
							$('#oracle-text-box').html(oracle_text);
							$('#large-image-box').attr('src', large_img+d.getTime());
						}
					}
				}
			}
			
		}
	});
});
