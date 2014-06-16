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
			if (Company.find({company: company, country: country}).count() == 0) {
				return false;
			} else {
				return true;
			};
		},
		addCompanyNumber: function(company, country) {
			if (Company.find({company: company, country: country}).count() == 0) {
				Company.insert({company: company, country: country, quantity: 1});
			} else{
				Company.update({company:company,country:country},
					{ $inc: {quantity: 1}});
			};
		},
		removeCompanyNumber: function(company, country) {
			Company.update({company:company,country:country},
				{ $inc: {quantity: -1}});
		}
	});
});
