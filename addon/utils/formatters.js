import Ember from 'ember';

import moment from 'moment';
import numeral from 'numeral';

const DEFAULT_DATE_TIMEZONE = "UTC",
      DEFAULT_DATE_FORMAT = "DD MMM YYYY HH:mm",
      DEFAULT_NUM_FORMAT = '0,0',
      DEFAULT_MEM_FORMAT = '0 b';

function durationFormatter(arr, value, unit) {
  if(value > 0) {
    if(value > 1) {
      unit += 's';
    }
    arr.push(value);
    arr.push(unit);
  }
}

export default Ember.Controller.create({
  date: function (value, options) {
    var date = moment.tz(value, options.valueFormat, options.valueTimeZone || DEFAULT_DATE_TIMEZONE);

    date = options.timeZone ? date.tz(options.timeZone) : date.local();

    return date.format(options.format || DEFAULT_DATE_FORMAT);
  },
  duration: function (value, options) {
    var duration = moment.duration(value, options.valueUnit),
        ret = [];

    durationFormatter(ret, duration.years(), 'year');
    durationFormatter(ret, duration.months(), 'month');
    durationFormatter(ret, duration.days(), 'day');
    durationFormatter(ret, duration.hours(), 'hour');
    durationFormatter(ret, duration.minutes(), 'minute');
    durationFormatter(ret, duration.seconds(), 'second');

    return ret.join(" ");
  },
  number: function (value, options) {
    return numeral(value).format(options.format || DEFAULT_NUM_FORMAT);
  },
  memory: function (value) {
    return numeral(value).format(DEFAULT_MEM_FORMAT);
  }
});
