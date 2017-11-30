import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('registro');
  this.route('idgenerator');
  this.route('login');
  this.route('inicio');
  this.route('iniciocliente');
  this.route('dsistema');
  this.route('lista-sistemas');
});

export default Router;
