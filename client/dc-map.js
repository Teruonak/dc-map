Students = new Meteor.Collection('students');

Router.map(function () {
  this.route('comingsoon', {path: '/'})
  this.route('add');
})

/*
  Background slideshow
*/
$('.coming-soon').backstretch([
  "img/backgrounds/1.jpg"
  , "img/backgrounds/2.jpg"
  , "img/backgrounds/3.jpg"
], {duration: 3000, fade: 750});

/*
Countdown initializer
*/
$('.timer').countdown({
  date: "13 June 2014 12:00:00",
  format: "on"
},

function() {
  // callback function
});


Template.hello.greeting = function () {
  return "Welcome to dc-map.";
};

Template.hello.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});
