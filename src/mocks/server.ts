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
      Object.keys(db.data.tabdata).forEach((tab) => {
        // @ts-ignore
        server.create('tab', { name: tab, ...db.data.tabdata[tab] });
      });
      Object.keys(db.data.plugins).forEach((plugin) => {
        // @ts-ignore
        server.create('plugin', { name: plugin, ...db.data.plugins[plugin] });
      });
    },
  });
}

export default createMockServer;
