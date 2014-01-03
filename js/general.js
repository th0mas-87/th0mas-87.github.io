
$(document).ready(function() {
	$(window).resize(); 
	$('nav a').click(function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$('nav').slideUp();
		setTimeout(function() {
			window.location = href;
		}, 500);
	})
});

$(window).resize(function() {
	$('nav a').css('font-size', $(window).width() / 87.5 + 'px');
	$('h1#title').css('font-size', $(window).width() / 20 + 'px');
});
