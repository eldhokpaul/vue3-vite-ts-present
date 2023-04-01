// @ts-nocheck
function mapToObject(arr, key = 'name') {
  return arr.models.reduce((prev, curr) => ({ ...prev, [curr[key]]: curr }), {});
}
async function route() {
  this.namespace = 'campaign';

  this.get('/', (schema) => {
    const tabs = schema.tabs.all();
    const plugins = schema.plugins.all();
    const returnData = {
      tabs: tabs.models.map((tab) => tab.name),
      tabdata: mapToObject(tabs),
      plugins: mapToObject(plugins),
    };
    return returnData;
  });
}

export default route;
