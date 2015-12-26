/*jshint browser: true */

import Ember from 'ember';

export default Ember.Controller.extend({
  progressValue: 0,

  init: function () {
    var that = this;
    setInterval(function () {
      var progressValue = that.get('progressValue');
      progressValue += Math.random() / 10;
      progressValue = progressValue % 1;
      that.set('progressValue', progressValue);
    }, 1000);
  }
});
