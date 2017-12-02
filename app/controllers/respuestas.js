import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		guardarRes(){
			let body = this.get('store').createRecord('respuesta', {
				body: this.get('model.body'),
				pregunta: this.get('pregunta.body')
			}).save();
			swal('La respuesta se publicó correctamente; Si no es una respuesta que aporte valor, esta será eliminada.')
		}
	}
});
