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
        success: function(){ console.log('SUCCESS CALLBACK'); },
        error: function(){ console.log('ERROR CALLBACK'); }
      });
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap1 = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-world-mill-en.js', {
      	success: function(){ console.log('SUCCESS CALLBACK jquery-jvectormap-world-mill-en'); },
        error: function(){ console.log('ERROR CALLBACK'); }
      });
      if(!jvectormap1.ready()){ return pause(); }
      var jvectormap2 = IRLibLoader.load('/client/lib/jvectormap/abstract-canvas-element.js', {});
      if(!jvectormap2.ready()){ return pause(); }
      var jvectormap3 = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap3.ready()){ return pause(); }
      var jvectormap4 = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap4.ready()){ return pause(); }
      var jvectormap5 = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap5.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }
      var jvectormap = IRLibLoader.load('/client/lib/jvectormap/jquery-jvectormap-1.2.2.min.js', {});
      if(!jvectormap.ready()){ return pause(); }

    },
    waitOn: function(){
        return [IRLibLoader.load(""), IRLibLoader.load("")]
  });
});