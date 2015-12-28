import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('em-progress', 'Integration | Component | em progress', {
  integration: true
});

test('It renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{em-progress}}`);

  assert.equal(this.$().text().trim(), '0%');

  this.render(hbs`{{#em-progress}}{{/em-progress}}`);
  assert.equal(this.$().text().trim(), '0%');
});

test('With a specific value', function(assert) {
  this.render(hbs`{{em-progress value=0.5}}`);
  assert.equal(this.$().text().trim(), '50%');
});

test('Custom valueMin & valueMax', function(assert) {
  this.render(hbs`{{em-progress value=15 valueMin=10 valueMax=20}}`);
  assert.equal(this.$().text().trim(), '50%');

  assert.notOk(this.$('.striped')[0], "Striped class added");
});

test('Check for stripes & animation while in progress', function(assert) {
  this.render(hbs`{{em-progress value=0.5 striped=true}}`);

  assert.equal(this.$().text().trim(), '50%');
  assert.ok(this.$('.striped')[0], "Striped class added");
  assert.ok(this.$('.animated')[0], "Animated class should be added!");
});

test('Check for stripes & animation while starting', function(assert) {
  this.render(hbs`{{em-progress value=0 striped=true}}`);

  assert.equal(this.$().text().trim(), '0%');
  assert.ok(this.$('.striped')[0], "Striped class added");
  assert.ok(!this.$('.animated')[0], "Animated class shouldn't be added!");
});

test('Check for stripes & animation on completion', function(assert) {
  this.render(hbs`{{em-progress value=1 striped=true}}`);

  assert.equal(this.$().text().trim(), '100%');
  assert.ok(this.$('.striped')[0], "Striped class added");
  assert.ok(!this.$('.animated')[0], "Animated class shouldn't be added!");
});
