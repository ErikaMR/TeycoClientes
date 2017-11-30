import Ember from 'ember';

export default Ember.Controller.extend({
	store: Ember.inject.service(),
	session: Ember.inject.service(),
	actions:{
		iniciar(){
			this.get('session').open('firebase', {
  			provider: 'password',
  			email: this.get('email'),
  			password: this.get('contrasena')
  			}).then((usuario)=>{
  				this.get('store').query('usuario', {
      			orderBy: 'uid',
      			limitToLast: 1,
      			equalTo: usuario.uid
				}).then((user)=>{
					if(user.get('firstObject.perfil'))
						this.transitionToRoute('inicio')
					else
						this.transitionToRoute('iniciocliente')
				})
			}).catch((error)=>
  			{
  			 alert("¡Aún no estas registrado!")
  			})
  		}
  	}
});
