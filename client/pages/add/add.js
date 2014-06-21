Template.eachCompany.rendered = function() {
  $("#inputCompany").chosen({
    no_results_text: "Selecione 'Nova empresa' antes, para adicionar",
    search_contains: true,
    allow_single_deselect: true
  }).change(function() {
    if (this.value == "--Nova empresa--") {
      this.value = "";
      $("#inputCompany_all_chosen").hide();
      $("#inputCompany_all_text").show();
    };
  });
  $("#inputCompany").on('chosen:showing_dropdown', function(evt, params){
    $("#inputCompany").trigger("chosen:updated");
  });
};

Template.countryList.rendered = function() {
  $("#inputCountry").chosen({
    no_results_text: "Epa. Nenhum país encontrado...",
    search_contains: true,
    allow_single_deselect: true
  });
};

/*
Template events
 */
Template.add.events({
  'click .btn-addUp': function(evt, tmpl) {
    evt.preventDefault();
    if($("#inputCompany_all_text").css("display") == "none") {
      var company = tmpl.find('#inputCompany').value;
      console.log("Nem é nova a empresa....");
    } else {
      var company = $("#inputCompany_all_text > input").val();
      $("#inputCompany_all_text > input").val("");
      console.log("Nova empresa!!!!");
    };
    var country = tmpl.find('#inputCountry').value;
    console.log("=====Insert=====");
    console.log("company: " + company);
    console.log("country: " + country);

    if (company != "" && country != "") {
      console.log("=====adicionado======");
      Meteor.call('addCompanyNumber',company,country);
      $("#inputCompany_all_chosen").show();
      $("#inputCompany_all_text").hide();
    };
  },
  'click #cancelAdd': function(evt, tmpl) {
      $("#inputCompany_all_chosen").show();
      $("#inputCompany_all_text").hide();
      $("#inputCompany").trigger("chosen:updated");
      // $("#inputCompany_chosen > a > span").text("");
      // $("#inputCompany_chosen > a > abbr").remove();
      // $("#inputCompany_chosen div.chosen-drop ul.chosen-results li.")
  }
});

Template.add.companyField = function() {
  return Company.find({}, {sort: {company: 1}});
};