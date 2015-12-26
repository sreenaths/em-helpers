# Em-helpers

As set of handlebar helpers for Ember 1.13.11 and higher.

## Installation

`npm install --save em-table`

## Helpers

### txt - _for formatting text_

```hbs
{{txt <value> [type={string} ..extra properties depended on type.. formatter={Function} ]}}
```

- When value is `undefined` or `null`, txt displays a **'Not Available'** message
- If the formatter function (built-in/external) throws an error; the error will be logged and an **'Error!'** message will be displayed

#### type:
- Supported values = `date, duration, number or memory`
- txt uses [momentjs](http://momentjs.com) for formatting date & duration, and [numeraljs](http://numeraljs.com/) for formatting numbers
- Other parameters depend on the type

##### type='date'
- [momentjs](http://momentjs.com) is used for formatting
- With date, value can be a date object, date string or number of milliseconds
- internal date formatter will perform all the parsing, and conversions
- Supported extra properties
  - **format** - Displayed date format. Default value is `DD MMM YYYY HH:mm`
  - **timeZone** - Displayed date time zone. Default is local time zone.
  - **valueFormat** - Format of incoming date string
  - **valueTimeZone** - Time zone of incoming value. Default value is `UTC`

##### type='duration'
- [momentjs](http://momentjs.com) is used for formatting
- Expects value to be of number type
- End result will be of the format `Y years M months D days h hours m minutes s seconds`
- Supported extra properties
  - **valueUnit** - Can be used to specify the unit of incoming value. It can be either of the string mentioned [here](http://momentjs.com/docs/#/durations/creating/)

##### type='number'
- [numeraljs](http://numeraljs.com/) is used for formatting
- Supported extra properties
  - **format** - Can be any of the format strings mentioned [here](http://numeraljs.com/). Default value is `0,0`.

##### type='memory'
- A short had for `type='number'` & `format='0 b'`

#### formatter:
- An optional callback function to create custom formatting.
- Will be called with two values; `value` and property `hash` passed into the helper
- Returned value must support `toString` method.

## Examples

```hbs
{{txt}} // Not Available!
```
```hbs
{{txt "Bat Man"}} // Bat Man
```
```hbs
{{txt 1399919400000 type="date"}} // 13 May 2014 00:00
```
```hbs
{{txt 3333 type="duration"}} // 3 seconds
```
```hbs
{{txt 10000000000 type="number"}} // 10,000,000,000
```
```hbs
{{txt 10000000000 type="memory"}} // 9 GB
```

### em-progress - _A simple progressbar_

```hbs
{{em-progress value=0 striped=true}}
```

- value - Current value to be displayed
- valueMin - Defaults to 0. Progress would be calculated from this value
- valueMax - Defaults to 1. Progress would be calculated to this value
- striped - Adds candy stripes to the progress-bar, and animates the same when valueMin < value < valueMax

## Running demo app

* `ember server`
* Visit your app at http://localhost:4200.
