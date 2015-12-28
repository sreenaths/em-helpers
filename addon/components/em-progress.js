import Ember from 'ember';
import layout from '../templates/components/em-progress';

export default Ember.Component.extend({
  layout: layout,

  value: 0,
  valueMin: 0,
  valueMax: 1,

  classNames: ["em-progress-container"],
  classNameBindings: ["animated", "striped"],

  striped: false,

  progressBar: null,
  progressText: null,

  widthPercent: Ember.computed("value", "valueMin", "valueMax", function () {
    var value = this.get("value"),
        valueMin = this.get("valueMin"),
        valueMax = this.get("valueMax");

    if(value < valueMin) {
      value = valueMin;
    }
    else if(value > valueMax) {
      value = valueMax;
    }

    value -= valueMin;
    valueMax -= valueMin;

    return (value / valueMax) * 100;
  }),

  animated: Ember.computed("widthPercent", "striped", function () {
    return this.get('striped') && this.get('widthPercent') > 0 && this.get('widthPercent') < 100;
  }),

  renderProgress: Ember.observer("progressBar", "progressText", "widthPercent", function () {
    var widthPercent = this.get('widthPercent');

    this.get("progressBar").width(widthPercent + "%");
    this.get("progressText").text(parseInt(widthPercent) + "%");
  }),

  didInsertElement: function () {
    this.setProperties({
      progressBar: this.$(".progress-bar"),
      progressText: this.$(".progress-text")
    });
  },

  willDestroy: function () {
    this.setProperties({
      progressBar: null,
      progressText: null
    });
  }
});
