/*Distribucion de grid*/
$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
});

jQuery(document).ready(function($) {
	
	/*sticky header*/
	$(window).scroll(function() {
		if( $(window).scrollTop() >= 180 ){
	
			$('header')
				.addClass('fixed')
				.velocity({
					backgroundColor: '#000',
					backgroundColorAlpha: 0.7
				},{
					duration: 100,
					easing: 'easeInOutSine'
				});


		}else{

			$('header')
				.removeClass('fixed')
				.velocity({
					backgroundColor: '#e4aa15',
					backgroundColorAlpha: 1
				},{
					duration: 100,
					easing: 'easeInOutSine'
				});
		}

	});


	var xhr = $.get('/all');

	xhr.done(function (data) {
		console.log(data);
	});
});