var hovered = false;

$(document).ready(function() {
	$('.pres').click(function(){

		if($(this).hasClass('clicked')){
			$('.pres' + $(this).attr('rel') +  ' img').animate({
			width: '90',
			height: 170,
			'box-shadow': '10px 4px 43px 2000px rgba(0,0,0,0.75)',
		
		});
			$(this).removeClass('clicked');
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