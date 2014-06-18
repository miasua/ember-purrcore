/* global Ember */
/* exported App */
/* jslint node: true */
/* jshint strict:false */

var App = Ember.Application.create({
    rootElement: '#mainWrap',
    LOG_TRANSITIONS: true
});

App.Router.map(function() {
    this.route('about');
    this.resource('cats', { path: 'mrow' } );
    this.resource('cat', { path: 'cats/:slug'});
});

App.IndexController = Ember.Controller.extend({
    siteTitle: 'Homepage • Welcome'
});

App.AboutController = Ember.Controller.extend({
    siteTitle: 'About • Echo Park authentic'
});

App.CatsRoute = Ember.Route.extend({
    model: function() {
        return App.CATS;
    }
});

App.CATS = [
    {
      type: 'Ginger',
      slug: 'ginger',
      image: 'img/rene.jpg'
    },
    {
      type: 'Black Shorthair',
      slug: 'black-shorthair',
      image: 'img/blacko.jpg'
    }
];

App.CatRoute = Ember.Route.extend({
    model: function(params) {
        return App.CATS.findBy('slug', params.slug);
    }
});


