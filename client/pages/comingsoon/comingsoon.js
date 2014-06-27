Template.comingsoon.rendered = function() {
    /*
		Background slideshow
	*/
	$('.coming-soon').backstretch([
		'/img/background-1.jpg'
		, '/img/background-2.jpg'
		, '/img/background-3.jpg'
	], {duration: 3000, fade: 750});
	
	
	/*
	Countdown initializer
	*/
	$('.timer').countdown({
		date: "04 July 2014 12:00:00",
		format: "on"
	},
	function() {
		// callback function
	});
};
