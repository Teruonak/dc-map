// Session.setDefault('countryName', "Brazil");
// Session.setDefault('companyName', "amdocs");

// var isChanged = true;

Template.eachCompany.rendered = function() {
  $("#inputCompany").chosen({
    no_results_text: "Empresa não cadastrada. Cadastre-a já mais abaixo!",
    search_contains: true,
    allow_single_deselect: true
  }).change(function() {
    // Meteor.call('removeAllCountyTemp');
    // if (this.value == "" || this.value == {}) {
    //   Company.copyTo(CountryTemp);
    //   CountryTemp.remove({country: {$ne: this.value}});
    // };
  });
};

Template.eachCountry.rendered = function() {
  $("#inputCountry").chosen({
    no_results_text: "Epa. Nenhum país encontrado...",
    search_contains: true,
    allow_single_deselect: true
  });
};

// Template.countryList.rendered = function() {
//   $("#inputCountry").chosen({
//     no_results_text: "Epa. Nenhum país encontrado...",
//     search_contains: true,
//     allow_single_deselect: true
//   });
// };

// var populateCountry = function(country) {
//   Template.add.countryField = function() {
//     return 
//   };
// };

/*
Template events
 */
Template.add.events({
  'click .btn-add':function(evt, tmpl) {
    evt.preventDefault();
    var company = tmpl.find('#inputCompany').value;
    var country = tmpl.find('#inputCountry').value;
    // Company.insert({company:company,country:country});
    Meteor.call('addCompanyNumber', company, country);
    console.log("Company row inserted or button clicked");
  },
  'click .btn-remove': function(evt, tmpl) {
    evt.preventDefault();
    var company = tmpl.find('#inputCompany').value;
    var country = tmpl.find('#inputCountry').value;
    Meteor.call('removeCompanyNumber', company, country);
    // Company.insert({company:company,country:country});
    console.log("Company row removed or button clicked");
  }
});

Template.add.companyField = function() {
  // if (CompanyTemp.find().count() === 0) {
  //   Company.find().forEach(function(doc) {
  //     CompanyTemp.insert(doc);
  //   });
  // }
  // return CompanyTemp.find();
  return Company.find();
};
Template.add.countryField = function() {
  // if (CountryTemp.find().count() === 0) {
  //   Company.find().forEach(function(doc) {
  //     CountryTemp.insert(doc);
  //   });
  // }
  // return CountryTemp.find();
  return Company.find();
};
Template.add.totalPeopleForSelection = function() {
  var numberTotal = 0;
  var companySelected = $("#inputCompany").value;
  var companyCursor = Company.find({

  });
  companyCursor.forEach(function(company) {
    numberTotal = numberTotal + quantity
  });
  return numberTotal;
};
Template.add.totalRegister = function() {
};