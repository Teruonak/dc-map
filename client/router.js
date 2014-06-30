Router.configure({
  layoutTemplate: 'dcmap'
});

Router.map(function () {
  this.route('comingsoon', {path: '/'}),
  this.route('add'),
  this.route('touch'),
  this.route('maps'),
  this.route('about')
});
