import fmts from '../../../utils/formatters';
import { module, test } from 'qunit';

import Ember from 'ember';

import moment from 'moment';

module('Unit | Utility | formatters');

test('Formatter functions created', function(assert) {
  assert.ok(fmts);

  assert.ok(fmts.date);
  assert.ok(fmts.duration);
  assert.ok(fmts.number);
  assert.ok(fmts.memory);
});

test('date: Default formatting - DD MMM YYYY HH:mm:ss', function(assert) {
  assert.equal(fmts.date(1451147679624, {}), "26 Dec 2015 22:04:39");
});

test('date: Parsing, timezone conversion(UTC to local) and formatting', function(assert) {
  var now = Date.now();

  assert.equal(fmts.date(new Date(now).toDateString(), {
    valueFormat: "ddd MMM DD YYYY",
    format: "DD MMM YYYY",
  }), moment(now).local().format("DD MMM YYYY"));
});

test('duration', function(assert) {
  var options = {
    format: "long"
  };
  assert.equal(fmts.duration(1, options), "1 millisecond");
  assert.equal(fmts.duration(60, options), "60 milliseconds");
  assert.equal(fmts.duration(6000, options), "6 seconds");
  assert.equal(fmts.duration(66000, options), "1 minute 6 seconds");
  assert.equal(fmts.duration(666000, options), "11 minutes 6 seconds");
  assert.equal(fmts.duration(6666000, options), "1 hour 51 minutes 6 seconds");
  assert.equal(fmts.duration(66666000, options), "18 hours 31 minutes 6 seconds");
  assert.equal(fmts.duration(666666000, options), "7 days 17 hours 11 minutes 6 seconds");
  assert.equal(fmts.duration(6666666000, options), "2 months 17 days 3 hours 51 minutes 6 seconds");
  assert.equal(fmts.duration(66666666000, options), "2 years 1 month 11 days 14 hours 31 minutes 6 seconds");

  options = {}; // By default format = short
  assert.equal(fmts.duration(60, options), "60 msecs");
  assert.equal(fmts.duration(6000, options), "6 secs");
  assert.equal(fmts.duration(66000, options), "1 min 6 secs");
  assert.equal(fmts.duration(666000, options), "11 mins 6 secs");
  assert.equal(fmts.duration(6666000, options), "1 hr 51 mins 6 secs");
  assert.equal(fmts.duration(66666000, options), "18 hrs 31 mins 6 secs");
  assert.equal(fmts.duration(666666000, options), "7 days 17 hrs 11 mins 6 secs");
  assert.equal(fmts.duration(6666666000, options), "2 mos 17 days 3 hrs 51 mins 6 secs");
  assert.equal(fmts.duration(66666666000, options), "2 yrs 1 mo 11 days 14 hrs 31 mins 6 secs");

  assert.equal(fmts.duration(60.4, options), "60 msecs");
  assert.equal(fmts.duration(60.6, options), "61 msecs");
});

test('number', function(assert) {
  assert.equal(fmts.number(6000, {}), "6,000");
  assert.equal(fmts.number(6000000, {}), "6,000,000");
});

test('memory', function(assert) {
  assert.equal(fmts.memory(600, {}), "600 B");
  assert.equal(fmts.memory(1024, {}), "1 KB");
  assert.equal(fmts.memory(1024 * 1024, {}), "1 MB");
  assert.equal(fmts.memory(1024 * 1024 * 1024, {}), "1 GB");
  assert.equal(fmts.memory(1024 * 1024 * 1024 * 1024, {}), "1 TB");
});

test('json', function(assert) {
  var str = "testString",
      complexObj = Ember.Object.create();

  assert.equal(fmts.json(str, {}), str);
  assert.equal(fmts.json(complexObj, {}), complexObj);

  assert.equal(fmts.json(null, {}), null);
  assert.equal(fmts.json(undefined, {}), undefined);

  assert.equal(fmts.json({x: 1}, {}), '{\n    "x": 1\n}');
  assert.equal(fmts.json({x: 1, y: 2}, {space: 1}), '{\n "x": 1,\n "y": 2\n}');
  assert.equal(fmts.json({x: 1, y: {z: 3}}, {space: 1}), '{\n "x": 1,\n "y": {\n  "z": 3\n }\n}');
});
