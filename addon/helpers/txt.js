import Ember from 'ember';
import formatters from '../utils/formatters';

export function txt(value, hash) {
  var message,
      dataType = hash.type,
      formatter = hash.formatter;

  if(value) {
    value = value[0];
  }

  try {
    if(value !== undefined && !formatter && dataType) {
      formatter = formatters[dataType];
    }

    if(formatter) {
      value = formatter(value, hash);
    }

    if(value === undefined || value === null) {
      message = 'Not Available!';
    }
    else {
      return Ember.Handlebars.Utils.escapeExpression(value.toString());
    }
  }
  catch(error) {
    message = "Invalid Data!";
    Ember.Logger.error(error);
  }

  return new Ember.Handlebars.SafeString('<span class="txt-message"> ' + message + ' </span>');
}

export default Ember.Helper.helper(txt);
