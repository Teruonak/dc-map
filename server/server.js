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
		initCompanyCollection: function() {
			Company.insert({company: "3WT"});
			Company.insert({company: "8d digital"});
			Company.insert({company: "Ablevision"});
			Company.insert({company: "Accenture"});
			Company.insert({company: "Amdocs"});
			Company.insert({company: "Aptor"});
			Company.insert({company: "Arvinmeritor"});
			Company.insert({company: "ATeCH"});
			Company.insert({company: "Atenatec"});
			Company.insert({company: "Atos origin"});
			Company.insert({company: "Autbank"});
			Company.insert({company: "Avon"});
			Company.insert({company: "Axoon"});
			Company.insert({company: "Claro"});
			Company.insert({company: "Bm&F"});
			Company.insert({company: "Bosch"});
			Company.insert({company: "Bull"});
			Company.insert({company: "Ci&T"});
			Company.insert({company: "Conectiva"});
			Company.insert({company: "Consulte TI"});
			Company.insert({company: "Contern"});
			Company.insert({company: "Coss Consulting"});
			Company.insert({company: "CPm Braxis"});
			Company.insert({company: "CPqd"});
			Company.insert({company: "Banco Credit suisse"});
			Company.insert({company: "Banco Itaú"});
			Company.insert({company: "Banco santander"});
			Company.insert({company: "daitanlabs"});
			Company.insert({company: "danone"});
			Company.insert({company: "data solutions"});
			Company.insert({company: "Philips"});
			Company.insert({company: "dmr Consulting"});
			Company.insert({company: "doois Tecnologia"});
			Company.insert({company: "easy software"});
			Company.insert({company: "ergo&Ação"});
			Company.insert({company: "elektro"});
			Company.insert({company: "embrapa"});
			Company.insert({company: "enalta"});
			Company.insert({company: "enjoy"});
			Company.insert({company: "everis"});
			Company.insert({company: "eyetec"});
			Company.insert({company: "FAI"});
			Company.insert({company: "FacTI"});
			Company.insert({company: "FBm Brasil"});
			Company.insert({company: "Freeddom "});
			Company.insert({company: "Freios rodoviários"});
			Company.insert({company: "H.m.sandres"});
			Company.insert({company: "IBm"});
			Company.insert({company: "Ícaro"});
			Company.insert({company: "imAX Games"});
			Company.insert({company: "Indusoft"});
			Company.insert({company: "Integris"});
			Company.insert({company: "Instituto eldorado"});
			Company.insert({company: "Itautec"});
			Company.insert({company: "Itera Inovação"});
			Company.insert({company: "Iteris"});
			Company.insert({company: "Johnson & Johnson"});
			Company.insert({company: "linkway"});
			Company.insert({company: "lnls - luz síncrotron"});
			Company.insert({company: "luz engenharia"});
			Company.insert({company: "mC1 TI"});
			Company.insert({company: "mds Inform."});
			Company.insert({company: "merial"});
			Company.insert({company: "microsoft"});
			Company.insert({company: "motorola"});
			Company.insert({company: "multicorpos"});
			Company.insert({company: "oracle"});
			Company.insert({company: "PadTec"});
			Company.insert({company: "Paggo"});
			Company.insert({company: "Phisystems"});
			Company.insert({company: "Pinuts studios"});
			Company.insert({company: "Portugal Telecom"});
			Company.insert({company: "Pref são Carlos"});
			Company.insert({company: "Pro IT"});
			Company.insert({company: "Primeup"});
			Company.insert({company: "Promon logicalis"});
			Company.insert({company: "PTls"});
			Company.insert({company: "rA Catering"});
			Company.insert({company: "rede PrePag"});
			Company.insert({company: "royal Canin"});
			Company.insert({company: "rhodia"});
			Company.insert({company: "s&V Consultoria"});
			Company.insert({company: "siemens"});
			Company.insert({company: "siena "});
			Company.insert({company: "senior solution"});
			Company.insert({company: "simula"});
			Company.insert({company: "sIsGrAPH"});
			Company.insert({company: "solução Integrada"});
			Company.insert({company: "sYm Tecnologia"});
			Company.insert({company: "Talent Pro IT"});
			Company.insert({company: "Tecumseh"});
			Company.insert({company: "Telefonica"});
			Company.insert({company: "Trópicos"});
			Company.insert({company: "Trust Agro"});
			Company.insert({company: "uCube"});
			Company.insert({company: "ultragaz"});
			Company.insert({company: "unesp"});
			Company.insert({company: "unilever"});
			Company.insert({company: "uol"});
			Company.insert({company: "Verdartis"});
			Company.insert({company: "Vertis"});
			Company.insert({company: "Whirlpool"});
			Company.insert({company: "Vectura"});
			Company.insert({company: "Yordan"});
			Company.insert({company: "Zarpsystem"});
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
