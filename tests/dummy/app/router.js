import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('txt', {path: "/"});
  this.route('em-progress');
  this.route('em-breadcrumbs');
  this.route('param-test', { path: "param-test/:id" });
});

export default Router;
