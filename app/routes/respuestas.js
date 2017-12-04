import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service(),
	model(params){
		console.log(params)
		return this.get('store').findRecord('pregunta', params.idpreg);
	},
	afterModel(model){
		this.set('respuesta', model.get('respuestas').createRecord());
	}, 
	setupController(controller){
		this._super(...arguments)
		controller.set('respuesta', this.get('respuesta'))
	}
});
