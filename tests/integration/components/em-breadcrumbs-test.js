import Ember from 'ember';

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('em-breadcrumbs', 'Integration | Component | em breadcrumbs', {
  integration: true
});

test('Basic creation test', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{em-breadcrumbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#em-breadcrumbs}}
      template block text
    {{/em-breadcrumbs}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('Test with one link-to item', function(assert) {
  var testItems = [{
    routeName: "foo",
    text: "fooText"
  }],
  elements;

  this.set("items", testItems);
  this.render(hbs`{{em-breadcrumbs items=items}}`);

  elements = this.$("li");

  assert.equal(elements.length, 1);
  assert.equal(Ember.$(elements[0]).text().trim(), testItems[0].text);
  assert.equal(elements[0].title, testItems[0].text);
  assert.equal(elements[0].style.maxWidth, "100%");
});

test('Test with two link-to item', function(assert) {
  var testItems = [{
    routeName: "foo",
    text: "fooText"
  },{
    routeName: "bar",
    text: "barText"
  }],
  elements;

  this.set("items", testItems);
  this.render(hbs`{{em-breadcrumbs items=items}}`);

  elements = this.$("li");

  assert.equal(elements.length, 2);

  assert.equal(Ember.$(elements[0]).text().trim(), testItems[0].text);
  assert.equal(elements[0].title, testItems[0].text);
  assert.equal(elements[0].style.maxWidth, "50%");

  assert.equal(Ember.$(elements[1]).text().trim(), testItems[1].text);
  assert.equal(elements[1].title, testItems[1].text);
  assert.equal(elements[1].style.maxWidth, "50%");
});

test('Test with one anchor tag item', function(assert) {
  var testItems = [{
    href: "foo.bar",
    text: "fooText"
  }],
  elements;

  this.set("items", testItems);
  this.render(hbs`{{em-breadcrumbs items=items}}`);

  elements = this.$("li");

  assert.equal(elements.length, 1);
  assert.equal(Ember.$(elements[0]).text().trim(), testItems[0].text);
  assert.equal(elements[0].title, testItems[0].text);
  assert.equal(elements[0].style.maxWidth, "100%");
});
