import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		guardarsv(){
			let ncliente, ubicacion, mac, nusuario, contra = this.get('store').createRecord('sistema', {
				ncliente: this.get('model.ncliente'),
				ubicacion: this.get('model.ubicacion'),
				mac: this.get('model.mac'),
				nusuario: this.get('model.nusuario'),
				contra: this.get('model.contra'),
			}).save();
			swal('Los datos se guardaron correctamente')
		}
	}
});
