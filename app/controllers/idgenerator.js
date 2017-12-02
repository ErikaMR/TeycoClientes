import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	store: Ember.inject.service(),
	actions:{
		aprobar(){
			let idnuevo = this.get('idnuevo')
			let nombreclient = this.get('nombreclient')

			this.get('store').createRecord('aprobado', {
					pid: idnuevo,
					nombre: nombreclient,
					}).save();
				swal('El registro se realizó correctamente')
		}
	}
});
