Register = new Meteor.Collection('register');
Company = new Meteor.Collection('company');
Country = new Meteor.Collection('country');

Router.map(function () {
  this.route('page', {path: '/'})
  this.route('add');
})

/*
Template events
 */
Template.add.events({
  'click .btn-add':function(evt, tmpl) {
    // evt.preventDefault();
    var name = tmpl.find('.form-control.name').value;
    var email = tmpl.find('.form-control.email').value;
    var country = tmpl.find('.form-control.country').value;
    Person.insert({name:name,email:email,country:country});
    console.log("test");
  }
});

Template.add.register = function() {
  return Register.find();
};
Template.add.company = function() {
  return Company.find();
};
Template.add.country = function() {
  return Country.find();
};
Template.add.totalRegister = function() {
  return Register.leght();
};


