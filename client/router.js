Router.configure({
  layoutTemplate: 'dc-map'
});

Router.map(function () {
  this.route('comingsoon', {path: '/'}),
  this.route('add'),
  this.route('addcompany')
});