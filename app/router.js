import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/'});
  this.route('womens', { path: '/womens'})
  this.route('mens', { path: '/momens'});
  this.route('accessories', { path: '/accessories'});
  this.route('about-us', { path: '/about-us'});
  this.route('contact-us', { path: '/contact-us'});
});

export default Router;
