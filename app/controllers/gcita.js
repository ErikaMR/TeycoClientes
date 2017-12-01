import Ember from 'ember';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		agendar(){
	       let motivo, lugar, fecha, contacto = this.get('store').createRecord('cita', {
				motivo: this.get('model.motivo'),
				lugar: this.get('model.lugar'),
				fecha: this.get('model.fecha'),
				contacto: this.get('model.contacto'),
			}).save();
			alert('Los datos se guardaron correctamente')
			}
	}

});
