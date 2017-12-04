import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		guardarPreg(){
			let preg = this.get('store').createRecord('pregunta', {
				preg: this.get('model.preg'),
			}).save();
			swal("La pregunta se publicó correctamente; Será eliminada en caso de ser inapropiada");
			this.transitionToRoute('iniciocliente')
		}
	}
});
