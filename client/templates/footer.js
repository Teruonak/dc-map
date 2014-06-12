

Template.footer.pessoas = function() {
	var numberTotal = 0;
	var companyCursor = Company.find();
	companyCursor.forEach(function(company) {
		numberTotal = numberTotal + company.quantity
	});
	return numberTotal;
};