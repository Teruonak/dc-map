Template.maps.rendered = function () {
	$(function(){
		//----------------------------------------------------Zoom no país
		$('#focus-init').click(function(){
				$('#world-map').vectorMap('set', 'focus', 1, 0, 0);
		});
		//----------------------------------------------------Zoom no país

		var markers = [
			{latLng: [-10, -50], name: 'SIMENS'}, //Define o posicionamento dos países
			{latLng: [-11, -45], name: 'MICROSOFT'},
			{latLng: [-8, -55], name: 'IBM'},
			{latLng: [-14, -50], name: 'TOVS'},
			{latLng: [-10, -40], name: 'DELL'},
			{latLng: [-8, -50], name: 'SANSUNG'},
			{latLng: [-10, -40], name: 'MOTOROLA'},
			{latLng: [51.51, 10], name: 'GOOGLE'},
			{latLng: [51.45, 15], name: 'SYMANTEC'},
			{latLng: [53.07, 30], name: 'LOCAWEB'}
		];
		var cityAreaData = [
			1,  //Define o tamanho de cada marcação em relação a outra marcação
			2,
			3,
			4,
			3,
			2,
			3,
			3,
			2,
			1
		];
		var gdpData = {  //Colocar informação de alunos em cada país. Ativada pela função onRegionLabelShow
			"BR": 'Brazil :: DC-UFSCAR',
			"US": '15 Alunos',
			"RU": '23 Alunos',
		};
		var myCustomColors = { //Customizar as cores de cada país de forma dinâmica ou manual
			'AU': '#32367F',
			'US': '#32367F',
			'RU': '#32367F',
			'BR': '#4B51BF',
			'JP': '#4B51BF',
		};

		var map = new jvm.WorldMap({   //Função map responsável em ativar as cores no mapa
			map: 'world_mill_en',
			container: $('#world-map'),
			regionStyle: {
				initial: {
				  fill: '#C8C8C8'   // Cor inicial
				},
				hover: {
					fill: "#FFFF55"  //Cor com over
				}
			},
		//----------------------Markers
			regionsSelectable: true,
			markersSelectable: false,
			markers: this.markers,
			markerStyle: {
			  initial: {
				fill: '#4DAC26' //Cor da marcação estado normal
			  },
			  selected: {
				fill: '#CA0020'  //Cor da marcação após clicado
			  }
			},
		//----------------------Markers
			backgroundColor: '#FFFFFF',  //Cor de fundo do mapa
			series: {
				regions: [{
					attribute: 'fill'
				}],
			//----------------------Markers //Chama as marcações de tamanhos distintos
				markers: [{
					attribute: 'r',
					scale: [6, 8], //Define o tamanhos das marcações
					values: this.cityAreaData
				}]
			//----------------------/Markers
			},
			focusOn: { //Amplia ou reduz o mapa inicial
					x: 0.5,
					y: 0.5,
					scale: 1
			},
			onRegionLabelShow: function(e, el, code){ //Função para apresentar os dados para cada país
				el.html(el.html()+' (Alunos - '+gdpData[code]+')');
			},
			//Função para dar uma ação nos cliques do mapa
			onRegionClick: function(event, code){   //Chamada de link através dos cliques no mapa
				$('#world-map').vectorMap('set', 'focus', code);  //Destacando o pais de acordo com o clique
				scale = map.scale;
				el.html(el.html()+' (Escala:'+ scale +')');
			}
		});  //Fecha função map

		map.series.regions[0].setValues(this.myCustomColors); //Chama o mapa e aplica a série de alterações de cores conforme a var myCustomColors
	});
};
