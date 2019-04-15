var hovered = false;

$(document).ready(function() { //Checks for the complete loading of the site
	$('.pres').click(function(){ //Checks for the clicking action on a div that has the class pres

		if($(this).hasClass('clicked')){ //Verifies if the clicked item has a certain class, this is used to verify the clicked state of the item
			$('.pres' + $(this).attr('rel') +  ' img').animate({ //This animates the growth of  the item
			width: '90',
			height: 170,
			'box-shadow': '10px 4px 43px 2000px rgba(0,0,0,0.75)',
		
		});
			$(this).removeClass('clicked'); //Gets rid of the class
		}
		else{
		$('.pres' + $(this).attr('rel') +  ' img').animate({
			width: '350',
			height: 600,
			'box-shadow': 'none',

		});
		$(this).addClass('clicked');}

	});
})