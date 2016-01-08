import Ember from 'ember';

export default Ember.Controller.extend({
  items: [{
    text: "Crumb to txt",
    routeName: "txt"
  }, {
    text: "Crumb to em-progress",
    routeName: "em-progress"
  }, {
    text: "Crumb with model/id",
    routeName: "param-test",
    model: 1
  }, {
    text: "Crumb to em-breadcrumbs",
    routeName: "em-breadcrumbs"
  }, {
    text: "Crumb to no route no href",
  }, {
    text: "Crumb to Google using href",
    href: "http://google.com"
  }, {
    text: "Last and active crumb"
  }]
});
