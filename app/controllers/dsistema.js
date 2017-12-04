import Ember from 'ember';
import swal from 'ember-sweetalert';

export default Ember.Controller.extend({
	store: Ember.inject.service(),
	actions:{
		guardarsv(sistema){
			sistema.save().then(()=>{
				Ember.RSVP.all(
					sistema.get('usuarios').map((usuario)=>{
						usuario.save();
					})
				).then(()=>{
					swal('Los datos se guardaron correctamente');
					this.transitionToRoute('lista-sistemas')
				})	
			})
			
		}
	}
});
