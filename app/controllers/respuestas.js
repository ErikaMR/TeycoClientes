import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		guardarRes(pregunta){
			this.get('respuesta').save().then(()=>{
				pregunta.save();
			})
			swal('La respuesta se publicó correctamente; Si no es una respuesta que aporte valor, será eliminada.');
			this.transitionToRoute('lista-preguntas')
		}
	}
});
