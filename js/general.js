
$(document).ready(function() {
	$(window).resize();
	$('div#main').fadeIn('slow');
	$('nav a').click(function() {
		event.preventDefault();
		$('body').css('transition', '0.25s ease');
		$('body').css('position', 'relative');
		$('body').css('left', '100%');
		$('nav').css('width', '200%')
		$('nav').css('margin-left', '-100%')
		$('nav a#current').attr('id', '');
		var href = $(this).attr('href');
		setTimeout(function() {
			window.location = href;
		}, 750);
	});
});

$(window).resize(function() {
	$('nav a').css('font-size', $(window).width() / 87.5 + 'px');
	$('h1#title').css('font-size', $(window).width() / 20 + 'px');
});
