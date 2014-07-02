Session.set('isCountryRendered',false);
Session.set('isRelationReady',false);

Deps.autorun(function(){
	Meteor.subscribe('country', function(){
		if (!maps && Session.get('isCountryRendered')) {
			initialize($("#worldmap")[0], [0,0], 2);
		}
	});
	Meteor.subscribe('relation',function(){
		Session.set('isRelationReady',true);
	});
});

Template.maps.rendered = function(){
	Session.set('isCountryRendered',true);
};

function style(feature) {
	return {
		fillColor: getColor(getStudents(feature.id)),
		weight: 1,
		opacity: 1,
		color: 'white',
		dashArray: '1',
		fillOpacity: 0.7
	};
};
function zoomToFeature(e) {
	maps.fitBounds(e.target.getBounds());
	info.update();
	Session.set('students',getStudents(e.target.feature.id));
	Session.set('country',e.target.feature.id);
	Session.set('companies',getCompanies(e.target.feature.id));
	companiesObject = Session.get('companies');
	$(".modal").modal();
};
function onEachFeature(feature, layer) {
	layer.on({
		dblclick: directToInsert,
		click: zoomToFeature
	});
};
function zoomToFeature(e) {
	maps.fitBounds(e.target.getBounds());
	info.update(e.target.feature.properties);
	// info.update();
	Session.set('getID',e.target.feature.id);
	$(".modal").modal();
};
function getStudents(countryID) {
	return Country.findOne({id: countryID},{fields: {students: 1}}).students;
};
function getCompanies(countryID) {
	return Relation.find({country:countryID},{fields: {company: 1,quantity:1}});
};
function getColor(d) {
	return d > 100  ? '#151B8D' :
	d > 50  ? '#15317E' :
	d > 10   ? '#153E7E' :
	d > 5   ? '#4863A0' :
	d > 1   ? '#616D7E' :
	'#6D7B8D';
};
function directToInsert(e) {
	info.update(e.target.feature.properties);
};

var info;
var maps;

var initialize = function(element, centroid, zoom, features) {
	maps = L.map(element, {
		scrollWheelZoom: false,
		doubleClickZoom: false,
		boxZoom: false,
		touchZoom: false
	}).setView(new L.LatLng(centroid[0], centroid[1]), zoom);

	L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {opacity: .5}).addTo(maps);

	info = L.control();

	info.onAdd = function (maps) {
		this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		this.update();
		return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	info.update = function (props) {
		this._div.innerHTML = '<h4>Departamento de Computação</h4>' +  (props ?
			'<b>' + 'Conhece alguém trabalhando em ' + props.name + '?</b><br />' + '<a href="http://dcnomundo.meteor.com/add">Adicione-o!</a>'
			: 'Escolha um país.');
	};

	info.addTo(maps);

	geojson = L.geoJson(countries_data, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(maps);

	maps.attributionControl.setPrefix('');

};

Template.countryinfomodal.helpers({
	isRelationReady: function(){
		return Session.get('isRelationReady');
	},
	companies: function(){
			return Relation.find({country: {$exists: true, $in: [Session.get('getID')]}},{fields: {company: 1,quantity:1}});
	},
	country: function() {
			return Country.findOne({id:Session.get('getID'), students: {$exists: true}},{fields: {students: 1}}).students;
	}
});
