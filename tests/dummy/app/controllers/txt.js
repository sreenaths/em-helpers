/*jshint browser: true */

import Ember from 'ember';

export default Ember.Controller.extend({

  // Data
  variable: "Text as variable",
  boundedVariable: 0,
  nullVariable: null,

  // Date
  dateNumVariable: 1399919400000,
  dateObject: new Date(),

  init: function () {
    var that = this;

    this._super();

    setInterval(function () {
      that.set('boundedVariable', Math.ceil(Math.random() * 100000));
    }, 1000);
  }

});
