import fmts from '../../../utils/formatters';
import { module, test } from 'qunit';

import moment from 'moment';

module('Unit | Utility | formatters');

test('Formatter functions created', function(assert) {
  assert.ok(fmts);

  assert.ok(fmts.date);
  assert.ok(fmts.duration);
  assert.ok(fmts.number);
  assert.ok(fmts.memory);
});

test('date: Default formatting - DD MMM YYYY HH:mm', function(assert) {
  assert.equal(fmts.date(1451147679624, {}), "26 Dec 2015 22:04");
});

test('date: Parsing, timezone conversion(UTC to local) and formatting', function(assert) {
  var now = Date.now();

  assert.equal(fmts.date(new Date(now).toDateString(), {
    valueFormat: "ddd MMM DD YYYY",
    format: "DD MMM YYYY",
  }), moment(now).local().format("DD MMM YYYY"));
});

test('duration', function(assert) {
  assert.equal(fmts.duration(6000, {}), "6 seconds");
  assert.equal(fmts.duration(66000, {}), "1 minute 6 seconds");
  assert.equal(fmts.duration(666000, {}), "11 minutes 6 seconds");
  assert.equal(fmts.duration(6666000, {}), "1 hour 51 minutes 6 seconds");
  assert.equal(fmts.duration(66666000, {}), "18 hours 31 minutes 6 seconds");
  assert.equal(fmts.duration(666666000, {}), "7 days 17 hours 11 minutes 6 seconds");
  assert.equal(fmts.duration(6666666000, {}), "2 months 17 days 3 hours 51 minutes 6 seconds");
  assert.equal(fmts.duration(66666666000, {}), "2 years 1 month 11 days 14 hours 31 minutes 6 seconds");
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
