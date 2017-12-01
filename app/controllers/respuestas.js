import Ember from 'ember';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		guardarRes(){
			let body = this.get('store').createRecord('respuesta', {
				body: this.get('model.body'),
				pregunta: this.get('pregunta.body')
			}).save();
			alert('Los datos se guardaron correctamente')
		}
	}
});
