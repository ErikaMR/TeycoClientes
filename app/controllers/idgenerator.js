import Ember from 'ember';

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
				alert('El registro se realizó correctamente')
		}
	}
});
