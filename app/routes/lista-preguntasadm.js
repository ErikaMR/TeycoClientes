import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('pregunta');
	},
	beforeModel(){
			return this.get('session').fetch().then(()=>{
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
				}else{
					this.transitionTo('login')
					}
			})
		})
	},
	actions: {
		borrarPreg(pregunta){
			alert("Se eliminó la pregunta");
			pregunta.destroyRecord();
		}
	}
});
