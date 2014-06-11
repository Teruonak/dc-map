// var runBackstretch = function() {
//   /*
//     Background slideshow
//   */
//   $('.coming-soon').backstretch([
//     '/img/background-1.jpg'
//     , '/img/background-2.jpg'
//     , '/img/background-3.jpg'
//   ], {duration: 3000, fade: 750});

// };

// var runCountDown = function() {

//   /*
//   Countdown initializer
//   */
//   $('.timer').countdown({
//     date: "13 June 2014 12:00:00",
//     format: "on"
//   },
//   function() {
//     // callback function
//   });
// };

// Template.comingsoon.rendered = function() {
//   Meteor.Loader.loadJs("/compatibility/jquery.backstretch.min.js",runBackstretch,100);
//   Meteor.Loader.loadJs("/compatibility/jquery.countdown.js",runCountDown,100);
// }
// if (Meteor.is_client) {
// Templaste.comingsoon.rendered = function() {
// 	/*
// 		Background slideshow
// 	*/
// 	$('.coming-soon').backstretch([
// 		'/img/background-1.jpg'
// 		, '/img/background-2.jpg'
// 		, '/img/background-3.jpg'
// 	], {duration: 3000, fade: 750});
	
	
// 	/*
// 	Countdown initializer
// 	*/
// 	$('.timer').countdown({
// 		date: "13 June 2014 12:00:00",
// 		format: "on"
// 	},
// 	function() {
// 		// callback function
// 	});
// };
// }