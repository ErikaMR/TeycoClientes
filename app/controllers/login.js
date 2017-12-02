import Ember from 'ember';
import sweetAlert from 'ember-sweetalert';

export default Ember.Controller.extend({
	store: Ember.inject.service(),
	session: Ember.inject.service('session'),
	actions:{
		iniciar(){
			this.get('session').open('firebase', {
  			provider: 'password',
  			email: this.get('email'),
  			password: this.get('contrasena')
  			}).then((usuario)=>{
          this.set("session.currentUser", usuario.uid);
  				this.get('store').query('usuario', {
      			orderBy: 'uid',
      			limitToLast: 1,
      			equalTo: usuario.uid
				}).then((user)=>{
					if(user.get('firstObject.perfil')) {
						this.transitionToRoute('inicio');
            console.log(this.get("session.currentUser"));
          }
					else {
						this.transitionToRoute('iniciocliente')
            console.log(this.get("session.currentUser"))
          }
				})
			}).catch((error)=>
  			{
  			 swal("¡Aún no tienes cuenta con nosotros!")
  			})
  		}
  	}
});
