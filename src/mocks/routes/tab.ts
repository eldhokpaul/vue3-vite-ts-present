// @ts-nocheck
async function route() {
  this.namespace = 'tab';

  this.get('/', (schema) => schema.tabs.all());
}

export default route;
