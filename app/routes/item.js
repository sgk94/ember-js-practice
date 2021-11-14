import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model(params) {
    const { key } = params;
    return key;
  }
}
