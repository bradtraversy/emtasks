import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tasks', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:task_id'});
  });
});

export default Router;
