import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return JSON.stringify(params);
  }
});
