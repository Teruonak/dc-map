// Session.setDefault('countryName', "Brazil");
// Session.setDefault('companyName', "amdocs");

// var isChanged = true;

Template.countryList.rendered = function() {
  $("#inputCountry").chosen({
    no_results_text: "Epa. Nenhum país encontrado...",
    search_contains: true,
    allow_single_deselect: true
  });
};

var populateCountry = function(country) {
  Template.addcompany.countryField = function() {
    return 
  };
};

/*
Template events
 */
Template.addcompany.events({
  'click .btn-add':function(evt, tmpl) {
    evt.preventDefault();
    var company = tmpl.find('#inputCompany').value;
    var country = tmpl.find('#inputCountry').value;
    // Company.insert({company:company,country:country});
    if (!Meteor.call('hasDoc',company,country)) {
      Meteor.call('insertCompany', company, country);
      console.log("entrou no if!");
    };
    console.log("nao entrou no if");
  }
});

Template.addcompany.companyField = function() {
  // if (CompanyTemp.find().count() === 0) {
  //   Company.find().forEach(function(doc) {
  //     CompanyTemp.insert(doc);
  //   });
  // }
  // return CompanyTemp.find();
  return Company.find();
};
Template.addcompany.countryField = function() {
  // if (CountryTemp.find().count() === 0) {
  //   Company.find().forEach(function(doc) {
  //     CountryTemp.insert(doc);
  //   });
  // }
  // return CountryTemp.find();
  return Company.find();
};
Template.addcompany.totalPeopleForSelection = function() {
  var numberTotal = 0;
  var companySelected = $("#inputCompany").value;
  var companyCursor = Company.find({

  });
  companyCursor.forEach(function(company) {
    numberTotal = numberTotal + quantity
  });
  return numberTotal;
};
Template.addcompany.totalRegister = function() {
};