var touched = function(evt, tmpl) {
	console.log("touched");
	alert("Touch!");
};

Template.touch.events({
	'click div': function(evt, tmpl) {touched(evt, tmpl);}
});
