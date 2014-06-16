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
		date: "20 June 2014 12:00:00",
		format: "on"
	},
	function() {
		// callback function
	});
};
