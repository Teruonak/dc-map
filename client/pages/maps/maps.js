Session.set('countryLoaded', false);
Deps.autorun(function(){
	// if (Session.get('countryLoaded') && !maps) {
	// 	initialize($("#worldmap")[0], [ 0, 0 ], 2);
	// };
	Meteor.subscribe('country', function(){
		Session.set('countryLoaded', true);
		if (!maps) {
			initialize($("#worldmap")[0], [ 0, 0 ], 2);
		}
	});
});

function style(feature) {
	// console.log(((Country.find({id: feature.id},{fields: {students: 1, _id: 0}}).fetch())[0]).students);
    return {
        fillColor: getColor(Country.findOne({id: feature.id},{fields: {students: 1,_id: 0}}).students),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '1',
        fillOpacity: 0.7
    };
}

function onEachFeature(feature, layer) {
    layer.on({
	dblclick: directToInsert,
        click: zoomToFeature
    });
}

function getStudents(feature) {
	return Country.findOne({id: feature.id},{fields: {students: 1,_id: 0}}).students;
}

function zoomToFeature(e) {
    maps.fitBounds(e.target.getBounds());
    info.update();
}

function getColor(d) {
    return d > 100  ? '#151B8D' :
           d > 50  ? '#15317E' :
           d > 10   ? '#153E7E' :
           d > 5   ? '#4863A0' :
           d > 1   ? '#616D7E' :
                      '#6D7B8D';
}

function directToInsert(e) {
    info.update(e.target.feature.properties);
}

var maps;
var info;

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

}
