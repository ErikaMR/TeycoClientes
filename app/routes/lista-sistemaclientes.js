import Ember from 'ember';

export default Ember.Route.extend({
	store: Ember.inject.service(),
		beforeModel(){
			return this.get('session').fetch().then(()=>{
			let id  = this.get('session.currentUser.uid');
			return this.get('store').query('usuario', {
				equalTo: id,
				orderBy: 'uid',
				limitToLast: 1
			}).then((user)=>{	
				if(user.get('firstObject')){
				if(user.get('firstObject.perfil'))
				{
					this.transitionTo('inicio')
				}
				else{
					this.set('usuario', user);
				}
				}else{
					this.transitionTo('login')
					}
			})
		}).catch(()=>{
			let id  = this.get('session.currentUser.uid');
			return this.get('store').query('usuario', {
				equalTo: id,
				orderBy: 'uid',
				limitToLast: 1
			}).then((user)=>{	
				if(user.get('firstObject')){
				if(!user.get('firstObject.perfil'))
				{
					this.transitionTo('iniciocliente')
				}
				else{
					this.set('usuario', user.firstObject);
				}
				}else{
					this.transitionTo('login')
					}
			})
		})
	},
	model(){
			let id  = this.get('session.currentUser.uid');

			return this.get('store').query('usuario', {
				equalTo: id,
				orderBy: 'uid',
				limitToLast: 1
			}).then((user)=>{
				let idUser = user.get('firstObject.id');
				let rSistemas = [];
		 return this.get('store').findAll('sistema').then((arr)=>{
			arr.forEach((sistema)=>{
				return sistema.get('usuarios').then((arr)=>{
					let continuar=true;
				arr.forEach((user)=>{
					if(continuar){
						if(user.id==idUser){
							rSistemas.pushObject(sistema)
							continuar=false;
						}
					}
					
				})
			})
				
			
		})
			return rSistemas

		})
		
		
		
			})
		
	},
	setupController(controller){
		this._super(...arguments)
		controller.set('usuario', this.get('usuario'))
	}
});
