// @ts-nocheck
import campaign from './campaign';
import tab from './tab';
import plugin from './plugin';

function routes() {
  campaign.call(this);
  tab.call(this);
  plugin.call(this);
}

export default routes;
