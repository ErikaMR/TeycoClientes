import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	session: Ember.inject.service('session'),
	actions:{
		agendar(){
			this.get('session').fetch().then(()=>{
				let id  = this.get('session.currentUser.uid');
				//console.log(id);
				this.get('store').query('usuario', {
				equalTo: id,
				orderBy: 'uid',
				limitToLast: 1
				}).then((user)=>{	
					let nombreCliente = user.get('firstObject.nombre');
					let idCliente = user.get('firstObject.uid');
					let motivo, lugar, fecha, ncliente, uid, contacto = this.get('store').createRecord('cita', {
						motivo: this.get('model.motivo'),
						lugar: this.get('model.lugar'),
						fecha: this.get('model.fecha'),
						ncliente: nombreCliente,
						uid: idCliente,
						contacto: this.get('model.contacto'),
					}).save();
					swal('La cita de guardó correctamente');
					this.transitionToRoute('iniciocliente')
				});
			});
			}
	}

});
