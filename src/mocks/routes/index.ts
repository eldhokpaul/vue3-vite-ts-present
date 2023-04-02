// @ts-nocheck
import dashboard from './dashboard';
import tab from './tab';
import plugin from './plugin';

function routes() {
  dashboard.call(this);
  tab.call(this);
  plugin.call(this);
}

export default routes;
