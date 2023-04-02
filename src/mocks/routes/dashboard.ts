// @ts-nocheck
import mapToObject from '@utils/mapToObject';

async function route() {
  this.namespace = 'dashboard';

  this.get('/', (schema) => {
    const tabs = schema.tabs.all();
    const plugins = schema.plugins.all();
    return {
      tabs: tabs.models.map((tab) => tab.name),
      tabdata: mapToObject(tabs),
      plugins: mapToObject(plugins),
    };
  });
}

export default route;
