/*jshint browser: true */

import Ember from 'ember';

export default Ember.Controller.extend({

  //Error
  errorObj: new Error("Error object message!"),

  // Data
  variable: "Text as variable",
  boundedVariable: 0,
  nullVariable: null,

  // Date
  dateNumVariable: 1399919400000,
  dateObject: new Date(),

  plainObject: {x: 1, a: '2<script>alert(0);</script>2'},
  complexObject: Ember.computed(function () {
    var obj = {};
    obj.recursive = obj;
    return obj;
  }),

  init: function () {
    var that = this;

    this._super();

    setInterval(function () {
      that.set('boundedVariable', Math.ceil(Math.random() * 100000));
    }, 1000);
  }
});
