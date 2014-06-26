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
			Company.insert({company: "3WT", index: "3WT".toLowerCase()});
			Company.insert({company: "8d digital", index: "8d digital".toLowerCase()});
			Company.insert({company: "Ablevision", index: "Ablevision".toLowerCase()});
			Company.insert({company: "Accenture", index: "Accenture".toLowerCase()});
			Company.insert({company: "Amdocs", index: "Amdocs".toLowerCase()});
			Company.insert({company: "Aptor", index: "Aptor".toLowerCase()});
			Company.insert({company: "Arvinmeritor", index: "Arvinmeritor".toLowerCase()});
			Company.insert({company: "ATeCH", index: "ATeCH".toLowerCase()});
			Company.insert({company: "Atenatec", index: "Atenatec".toLowerCase()});
			Company.insert({company: "Atos origin", index: "Atos origin".toLowerCase()});
			Company.insert({company: "Autbank", index: "Autbank".toLowerCase()});
			Company.insert({company: "Avon", index: "Avon".toLowerCase()});
			Company.insert({company: "Axoon", index: "Axoon".toLowerCase()});
			Company.insert({company: "Claro", index: "Claro".toLowerCase()});
			Company.insert({company: "Bm&F", index: "Bm&F".toLowerCase()});
			Company.insert({company: "Bosch", index: "Bosch".toLowerCase()});
			Company.insert({company: "Bull", index: "Bull".toLowerCase()});
			Company.insert({company: "Ci&T", index: "Ci&T".toLowerCase()});
			Company.insert({company: "Conectiva", index: "Conectiva".toLowerCase()});
			Company.insert({company: "Consulte TI", index: "Consulte TI".toLowerCase()});
			Company.insert({company: "Contern", index: "Contern".toLowerCase()});
			Company.insert({company: "Coss Consulting", index: "Coss Consulting".toLowerCase()});
			Company.insert({company: "CPm Braxis", index: "CPm Braxis".toLowerCase()});
			Company.insert({company: "CPqd", index: "CPqd".toLowerCase()});
			Company.insert({company: "Banco Credit suisse", index: "Banco Credit suisse".toLowerCase()});
			Company.insert({company: "Banco Itaú", index: "Banco Itaú".toLowerCase()});
			Company.insert({company: "Banco santander", index: "Banco santander".toLowerCase()});
			Company.insert({company: "daitanlabs", index: "daitanlabs".toLowerCase()});
			Company.insert({company: "danone", index: "danone".toLowerCase()});
			Company.insert({company: "data solutions", index: "data solutions".toLowerCase()});
			Company.insert({company: "Philips", index: "Philips".toLowerCase()});
			Company.insert({company: "dmr Consulting", index: "dmr Consulting".toLowerCase()});
			Company.insert({company: "doois Tecnologia", index: "doois Tecnologia".toLowerCase()});
			Company.insert({company: "easy software", index: "easy software".toLowerCase()});
			Company.insert({company: "ergo&Ação", index: "ergo&Ação".toLowerCase()});
			Company.insert({company: "elektro", index: "elektro".toLowerCase()});
			Company.insert({company: "embrapa", index: "embrapa".toLowerCase()});
			Company.insert({company: "enalta", index: "enalta".toLowerCase()});
			Company.insert({company: "enjoy", index: "enjoy".toLowerCase()});
			Company.insert({company: "everis", index: "everis".toLowerCase()});
			Company.insert({company: "eyetec", index: "eyetec".toLowerCase()});
			Company.insert({company: "FAI", index: "FAI".toLowerCase()});
			Company.insert({company: "FacTI", index: "FacTI".toLowerCase()});
			Company.insert({company: "FBm Brasil", index: "FBm Brasil".toLowerCase()});
			Company.insert({company: "Freeddom ", index: "Freeddom ".toLowerCase()});
			Company.insert({company: "Freios rodoviários", index: "Freios rodoviários".toLowerCase()});
			Company.insert({company: "H.m.sandres", index: "H.m.sandres".toLowerCase()});
			Company.insert({company: "IBm", index: "IBm".toLowerCase()});
			Company.insert({company: "Ícaro", index: "Ícaro".toLowerCase()});
			Company.insert({company: "imAX Games", index: "imAX Games".toLowerCase()});
			Company.insert({company: "Indusoft", index: "Indusoft".toLowerCase()});
			Company.insert({company: "Integris", index: "Integris".toLowerCase()});
			Company.insert({company: "Instituto eldorado", index: "Instituto eldorado".toLowerCase()});
			Company.insert({company: "Itautec", index: "Itautec".toLowerCase()});
			Company.insert({company: "Itera Inovação", index: "Itera Inovação".toLowerCase()});
			Company.insert({company: "Iteris", index: "Iteris".toLowerCase()});
			Company.insert({company: "Johnson & Johnson", index: "Johnson & Johnson".toLowerCase()});
			Company.insert({company: "linkway", index: "linkway".toLowerCase()});
			Company.insert({company: "lnls - luz síncrotron", index: "lnls - luz síncrotron".toLowerCase()});
			Company.insert({company: "luz engenharia", index: "luz engenharia".toLowerCase()});
			Company.insert({company: "mC1 TI", index: "mC1 TI".toLowerCase()});
			Company.insert({company: "mds Inform.", index: "mds Inform.".toLowerCase()});
			Company.insert({company: "merial", index: "merial".toLowerCase()});
			Company.insert({company: "microsoft", index: "microsoft".toLowerCase()});
			Company.insert({company: "motorola", index: "motorola".toLowerCase()});
			Company.insert({company: "multicorpos", index: "multicorpos".toLowerCase()});
			Company.insert({company: "oracle", index: "oracle".toLowerCase()});
			Company.insert({company: "PadTec", index: "PadTec".toLowerCase()});
			Company.insert({company: "Paggo", index: "Paggo".toLowerCase()});
			Company.insert({company: "Phisystems", index: "Phisystems".toLowerCase()});
			Company.insert({company: "Pinuts studios", index: "Pinuts studios".toLowerCase()});
			Company.insert({company: "Portugal Telecom", index: "Portugal Telecom".toLowerCase()});
			Company.insert({company: "Pref são Carlos", index: "Pref são Carlos".toLowerCase()});
			Company.insert({company: "Pro IT", index: "Pro IT".toLowerCase()});
			Company.insert({company: "Primeup", index: "Primeup".toLowerCase()});
			Company.insert({company: "Promon logicalis", index: "Promon logicalis".toLowerCase()});
			Company.insert({company: "PTls", index: "PTls".toLowerCase()});
			Company.insert({company: "rA Catering", index: "rA Catering".toLowerCase()});
			Company.insert({company: "rede PrePag", index: "rede PrePag".toLowerCase()});
			Company.insert({company: "royal Canin", index: "royal Canin".toLowerCase()});
			Company.insert({company: "rhodia", index: "rhodia".toLowerCase()});
			Company.insert({company: "s&V Consultoria", index: "s&V Consultoria".toLowerCase()});
			Company.insert({company: "siemens", index: "siemens".toLowerCase()});
			Company.insert({company: "siena ", index: "siena ".toLowerCase()});
			Company.insert({company: "senior solution", index: "senior solution".toLowerCase()});
			Company.insert({company: "simula", index: "simula".toLowerCase()});
			Company.insert({company: "sIsGrAPH", index: "sIsGrAPH".toLowerCase()});
			Company.insert({company: "solução Integrada", index: "solução Integrada".toLowerCase()});
			Company.insert({company: "sYm Tecnologia", index: "sYm Tecnologia".toLowerCase()});
			Company.insert({company: "Talent Pro IT", index: "Talent Pro IT".toLowerCase()});
			Company.insert({company: "Tecumseh", index: "Tecumseh".toLowerCase()});
			Company.insert({company: "Telefonica", index: "Telefonica".toLowerCase()});
			Company.insert({company: "Trópicos", index: "Trópicos".toLowerCase()});
			Company.insert({company: "Trust Agro", index: "Trust Agro".toLowerCase()});
			Company.insert({company: "uCube", index: "uCube".toLowerCase()});
			Company.insert({company: "ultragaz", index: "ultragaz".toLowerCase()});
			Company.insert({company: "unesp", index: "unesp".toLowerCase()});
			Company.insert({company: "unilever", index: "unilever".toLowerCase()});
			Company.insert({company: "uol", index: "uol".toLowerCase()});
			Company.insert({company: "Verdartis", index: "Verdartis".toLowerCase()});
			Company.insert({company: "Vertis", index: "Vertis".toLowerCase()});
			Company.insert({company: "Whirlpool", index: "Whirlpool".toLowerCase()});
			Company.insert({company: "Vectura", index: "Vectura".toLowerCase()});
			Company.insert({company: "Yordan", index: "Yordan".toLowerCase()});
			Company.insert({company: "Zarpsystem", index: "Zarpsystem".toLowerCase()});
		},
		addCompanyNumber: function(company, country) {
			if (Company.find({index: company.toLowerCase()}).count() == 0) {
				Company.insert({company: company, index: company.toLowerCase()});
			};
			if (Relation.find({index: company.toLowerCase(), country: country}).count() == 0) {
				Relation.insert({company: company, country: country, quantity: 1, index: company.toLowerCase()});
			} else{
				Relation.update({index:company.toLowerCase(),country:country},
					{ $inc: {quantity: 1}});
			};
		}
	});
});
