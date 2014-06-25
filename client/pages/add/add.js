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
      $("#inputCompany_all").show();
      $("#inputCompany_all_text").hide();
    };
  },
  'click #cancelAdd': function(evt, tmpl) {
    $("#inputCompany_all").show();
    $("#inputCompany_all_text").hide();
  },
  'change #inputCompany': function(evt, tmpl) {
    console.log($(evt.target).val());
    if ($(evt.target).val() == "--Nova empresa--") {
      $(evt.target).val("");
      $("#inputCompany_all").hide();
      $("#inputCompany_all_text").show();
    };
  },
  'focusin #inputCompany, #inputCountry': function(evt, tmpl) {
    Session.set("templateName",null);
  }
});

Template.add.companyField = function() {
  return Company.find({}, {sort: {company: 1}});
};