Router.configure({
  layoutTemplate: 'dc-map'
});

Router.map(function () {
  this.route('comingsoon', {path: '/'}),
  this.route('add'),
  this.route('touch'),
  this.route('maps', {
    path: '/maps',
    onBeforeAction: function(pause){
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {
      });
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap1 = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-world-mill-en.js', {
      });
    },
    waitOn: function(){
        return [IRLibLoader.load(""), IRLibLoader.load("")]
    }
  });
});