Template.add.rendered = function() {
  $(".choosen-form").chosen({
    no_results_text: "Oops, nothing found!",
    search_contains: true
  });
};

/*
Template events
 */
Template.add.events({
  'click .btn-add':function(evt, tmpl) {
    evt.preventDefault();
    var company = tmpl.find('.form-control.company').value;
    console.log("company: " + company);
    var country = tmpl.find('.form-control.country').value;
    console.log("country: " + country);
    var quantity = tmpl.find('.form-control.quantity').value;
    console.log("quantity" + quantity);
    Company.insert({company:company,country:country,quantity:quantity});
    console.log("Company row inserted or button clicked");
  }
});

Template.add.companyField = function() {
  return Company.find();
};
Template.add.countryField = function() {
  return Company.find();
};
Template.add.totalRegister = function() {
};