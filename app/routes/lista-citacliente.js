import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service(),
	session: Ember.inject.service('session'),
	model(){
		let userId;
		this.get('session').fetch().then(()=>{
			userId = this.get('session.currentUser.uid');
			/*
			this.store.query('cita', {
				filter: {
					uid: userId
				}
			}).then((citas)=>{
				return;
				//console.log(citas.get('firstObject'));
				//return citas.get('firstObject');
			});
			*/
			//return this.store.findByIds('cita', userId);
			
		});
		let citas = this.store.query('cita', {filter:{uid: "h7PFW2sNPNP11AywaQsMuQJOkgk1"}});

		console.log(citas);
		return citas;
		
	},
	actions: {
		borrarCita(cita){
			swal("Se canceló su cita");
			cita.destroyRecord();
		}
	}
});
