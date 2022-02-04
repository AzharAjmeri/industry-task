// Scroll function
$(function() {
	$('ul.nav a').bind('click',function(event){
        event.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
	});
});