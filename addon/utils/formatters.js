import Ember from 'ember';

import moment from 'moment';
import numeral from 'numeral';

const DEFAULT_DATE_TIMEZONE = "UTC",
      DEFAULT_DATE_FORMAT = "DD MMM YYYY HH:mm",
      DEFAULT_NUM_FORMAT = '0,0',
      DEFAULT_MEM_FORMAT = '0 b';

const DURATION_FORMATS = {
  long: {
    year: "year",
    month: "month",
    day: "day",
    hour: "hour",
    minute: "minute",
    second: "second",
    millisecond: "millisecond"
  },
  short: {
    year: "yr",
    month: "mo",
    day: "day",
    hour: "hr",
    minute: "min",
    second: "sec",
    millisecond: "msec"
  }
};

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
        format = DURATION_FORMATS[options.format || "short"],
        ret = [];

    durationFormatter(ret, duration.years(), format.year);
    durationFormatter(ret, duration.months(), format.month);
    durationFormatter(ret, duration.days(), format.day);
    durationFormatter(ret, duration.hours(), format.hour);
    durationFormatter(ret, duration.minutes(), format.minute);
    durationFormatter(ret, duration.seconds(), format.second);
    durationFormatter(ret, duration.milliseconds(), format.millisecond);

    return ret.join(" ");
  },
  number: function (value, options) {
    return numeral(value).format(options.format || DEFAULT_NUM_FORMAT);
  },
  memory: function (value) {
    return numeral(value).format(DEFAULT_MEM_FORMAT);
  }
});
