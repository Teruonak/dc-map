Meteor.startup(function() {
	return Meteor.methods({
		resetAllCompany: function() {
			Company.remove({});
			Company.insert({company: ""});
			Company.insert({company: "--Nova empresa--"});
		},
		resetAllCollections: function() {
			Company.remove({});
			Company.insert({company: ""});
			Company.insert({company: "--Nova empresa--"});

			Relation.remove({});
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
			if (Company.find({company: company}).count() == 0) {
				Company.insert({company: company});
			};
			if (Relation.find({company: company, country: country}).count() == 0) {
				Relation.insert({company: company, country: country, quantity: 1});
			} else{
				Relation.update({company:company,country:country},
					{ $inc: {quantity: 1}});
			};
		},
		findDistinct: function() {
			var myArray = Company.find().fetch();
			var distinctArray = _.uniq(myArray, false, function(d) {return d.company});
			var disctinctValues = _.pluck(distinctArray, 'company');
			return disctinctValues;
		}
	});
});
