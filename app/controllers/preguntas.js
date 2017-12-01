import Ember from 'ember';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		guardarPreg(){
			let preg = this.get('store').createRecord('pregunta', {
				preg: this.get('model.preg'),
			}).save();
			alert('Los datos se guardaron correctamente')
		}
	}
});
