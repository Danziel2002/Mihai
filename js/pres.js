var hovered = false;
var clicked = true;
$(document).ready(function() { //Checks for the complete loading of the site
	$('.pres').click(function(){ //Checks for the clicking action on a div that has the class pres

		if($(this).hasClass('clicked')){ //Verifies if the clicked item has a certain class, this is used to verify the clicked state of the item
			$('.pres' + $(this).attr('rel') +  ' img').animate({ //This animates the growth of  the item
			width: '75',
			height: 100,
			'box-shadow': '10px 4px 43px 2000px rgba(0,0,0,0.75)',
		
		});
			$(this).removeClass('clicked'); //Gets rid of the class
		}
		else{
		$('.pres' + $(this).attr('rel') +  ' img').animate({
			width: '150',
			height: 200,
			'box-shadow': 'none',

		});
		$(this).addClass('clicked');}

	});


	$('.burger h3').click(function(){

		$('.navBar').toggle();
		if(clicked == true){
		$('.pres img').css({
			'margin': "1em",
		});
		clicked = false;
	}else{
		$('.pres img').css({
			'margin': "0.3em",
		});
		clicked = true;
	}
	});
})
