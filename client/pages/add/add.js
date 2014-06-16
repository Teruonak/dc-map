Template.eachCompany.rendered = function() {
  $("#inputCompany").chosen({
    no_results_text: "Digite '.' (ponto) para cadastrar e espere atualizar a página",
    search_contains: true,
    allow_single_deselect: true
  }).change(function() {
    if (this.value == "" || this.value == {}) {
      $("#inputCountry_chosen > a > span").text("Selecione a empresa primeiro.");
      $("#inputCountry_chosen > a").toggleClass("chosen-default").css("color", "#999");
      $("#inputCountry_chosen > a > abbr").remove();
    } else {
      if ($("#inputCountry_chosen > a > span").text() == "") {
        $("#inputCountry_chosen > a > span").text("Selecione o país.");
      };
    }
  });
};

Template.countryList.rendered = function() {
  $("#inputCountry").chosen({
    no_results_text: "Epa. Nenhum país encontrado...",
    search_contains: true,
    allow_single_deselect: true
  }).change(function() {
    if ($("#inputCountry_chosen > a > span").text() != "Selecione o país."
        || $("#inputCountry_chosen > a > span").text() != "Selecione a empresa primeiro.") {
      $("#inputCountry_chosen > a").css("color", "#000");
    } else {
      $("#inputCountry_chosen > a").css("color", "#999");
    };
  });
};

/*
Template events
 */
Template.add.events({
  'click .btn-add': function(evt, tmpl) {
    evt.preventDefault();
    var company = tmpl.find('#inputCompany').value;
    var country = tmpl.find('#inputCountry').value;
    Meteor.call('addCompanyNumber', company, country);
    
    console.log("Company row inserted or button clicked");
  },
  'click .btn-addUp': function(evt, tmpl) {
    evt.preventDefault();
    var company = tmpl.find('#inputCompany').value;
    var country = tmpl.find('#inputCountry').value;
    Meteor.call('addCompanyNumber',company,country);
    console.log("Company count number add up");
  },
  'keypress div#inputCompany_chosen>div.chosen-drop>div.chosen-search>input': function (evt, tmpl) {
    if (evt.which === 46) {
      var companyTemp = $("#inputCompany_chosen div.chosen-search:first > input").val();
      Meteor.call('insertCompany',companyTemp,"");
      location.reload();
    }
  }
});

Template.add.companyField = function() {
  return Company.find();
};