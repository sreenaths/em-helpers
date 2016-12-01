import { txt } from '../../../helpers/txt';
import { module, test } from 'qunit';

module('Unit | Helper | txt');

test('txt: created', function(assert) {
  assert.ok(txt);
});

test('txt: String', function(assert) {
  assert.equal(txt(["Abc"], {}), "Abc");
  assert.equal(txt(null, {}).string, '<span class="txt-message"> Not Available! </span>');
});

test('txt: String - success', function(assert) {
  assert.equal(txt(["Abc"], {}), "Abc");
  assert.equal(txt(null, {}).string, '<span class="txt-message"> Not Available! </span>');
  assert.equal(txt([null], {}).string, '<span class="txt-message"> Not Available! </span>');
});

test('txt: String - error', function(assert) {
  var obj = {};

  obj.toString = null;
  assert.equal(txt([obj], {}).string, '<span class="txt-message"> Invalid Data! </span>');
});

test('txt: json', function(assert) {
  var obj = {
    x: 1,
    y: 2
  };
  assert.equal(txt([obj], {
    type: "json",
  }).string, '{\n    &quot;x&quot;: 1,\n    &quot;y&quot;: 2\n}');
});

test('txt: error', function(assert) {
  var err = new Error("testError");
  assert.equal(txt([err], {}).string, '<span title="testError" class="txt-message"> Error! </span>');
});
