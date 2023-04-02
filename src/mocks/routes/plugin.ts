// @ts-nocheck
import mapToObject from '@utils/mapToObject';

async function route() {
  this.namespace = 'plugin';

  this.get('/', (schema) => schema.plugins.all());

  this.put('/', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const tab = schema.tabs.findBy({ name: attrs.tab });
    const newActive = attrs.active
      ? [...tab.active, attrs.plugin]
      : tab.active.filter((item) => item !== attrs.plugin);
    const newInactive = attrs.active
      ? tab.inactive.filter((item) => item !== attrs.plugin)
      : [...tab.inactive, attrs.plugin];

    schema.db.tabs.update({ name: attrs.tab }, { active: newActive, inactive: newInactive });
    return schema.tabs.findBy({ name: attrs.tab });
  });

  this.put('/toggle-all', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    schema.db.plugins.update({ disabled: attrs.disabled });
    const plugins = mapToObject(schema.plugins.all());
    return { plugins };
  });
}

export default route;
