/*
Template events
 */
Template.add.events({
  'click .btn-addUp': function(evt, tmpl) {
    evt.preventDefault();
    Session.set("templateName", null);
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
      $("#inputCountry").val("");
      Session.set("templateName","alertSuccess");
      // $("#alertField").append("");
    } else {
      Session.set("templateName", "alertDanger");
      // $("#alertField").append("<div class=\"alert alert-danger alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>Preencha todos os campos.</div>");
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

Template.add.helpers({
  alertField: function(){
    if(Template[Session.get("templateName")]){
      return Template[Session.get("templateName")];
    } 
    return null;
    // return Template["alertSuccess"];
  }
});

Template.add.companyField = function() {
  return Company.find({}, {sort: {index: 1}});
};