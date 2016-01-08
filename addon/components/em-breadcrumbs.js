import Ember from 'ember';
import layout from '../templates/components/em-breadcrumbs';

export default Ember.Component.extend({
  layout: layout,

  itemStyle: Ember.computed("items", function () {
    var itemCount = this.get("items.length");

    if(itemCount) {
      let widthPercent = 100 / itemCount;
      return new Ember.Handlebars.SafeString(`max-width: ${widthPercent}%`);
    }
  }),

  normalizedItems: Ember.computed("items", function () {
    var items = this.get("items");

    if(items) {
      let lastIndex = items.length - 1;
      items = items.map(function (item, index) {
        var itemDef = {
          text: item.text,
          classNames: item.classNames || [],
        };

        Ember.assert("classNames must be an array", Array.isArray(itemDef.classNames));

        if(index === lastIndex) {
          itemDef.classNames.push("active");
        }
        else {
          itemDef.routeName = item.routeName;
          itemDef.model = item.model;
          itemDef.href = item.href;
        }

        itemDef.classNames = itemDef.classNames.join(" ");
        return itemDef;
      });
    }

    return items;
  })
});
