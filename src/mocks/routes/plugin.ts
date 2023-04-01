// @ts-nocheck
async function route() {
  this.namespace = 'plugin';

  this.get('/', (schema) => schema.plugins.all());
}

export default route;
