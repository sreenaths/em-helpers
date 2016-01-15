import { txt } from '../../../helpers/txt';
import { module, test } from 'qunit';

module('Unit | Helper | txt');

test('txt: created', function(assert) {
  assert.ok(txt);
});

test('txt: String', function(assert) {
  assert.equal(txt(["Abc"], {}), "Abc");
  assert.equal(txt(null, {}), '<span class="txt-message"> Not Available! </span>');
});

test('txt: String - success', function(assert) {
  assert.equal(txt(["Abc"], {}), "Abc");
  assert.equal(txt(null, {}), '<span class="txt-message"> Not Available! </span>');
  assert.equal(txt([null], {}), '<span class="txt-message"> Not Available! </span>');
});

test('txt: String - error', function(assert) {
  var obj = {};

  obj.toString = null;
  assert.equal(txt([obj], {}), '<span class="txt-message"> Invalid Data! </span>');
});
