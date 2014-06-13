Meteor.startup(function() {
	return Meteor.methods({
		// removeAllCompanyTemp: function() {
		// 	return CompanyTemp.remove({});
		// },
		// removeAllCountryTemp: function() {
		// 	return CountryTemp.remove({});
		// },
		// printInLogThis: function(text) {
		// 	console.log(text);
		// },
		removeAllCompany: function() {
			return Company.remove({});
		},
		insertCompany: function(company, country) {
			console.log("company: " + company);
			console.log("country: " + country);
			Company.insert({company: company, country: country, quantity: 0});
		},
		hasDoc: function(company, country){
			console.log("company: " + company);
			console.log("country: " + country);
			return Company.find({company: company, country: country}).count;
		},
		addCompanyNumber: function(company, country) {
			Company.update({company:company,country:country},
				{ $inc: {quantity: 1}});
		},
		removeCompanyNumber: function(company, country) {
			Company.update({company:company,country:country},
				{ $inc: {quantity: -1}});
		}
	});
});
