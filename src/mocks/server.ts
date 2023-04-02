// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Model } from 'miragejs';
import routes from './routes';
// @ts-ignore
import db from './db.json';

function createMockServer() {
  return createServer({
    models: {
      tab: Model,
      plugin: Model,
    },
    routes() {
      routes.call(this);
    },
    seeds(server) {
      Object.entries(db.data.tabdata).forEach(([key, value]) => {
        server.create('tab', { name: key, ...value as any });
      });
      Object.entries(db.data.plugins).forEach(([key, value]) => {
        server.create('plugin', { name: key, ...value as any });
      });
    },
  });
}

export default createMockServer;
