import Ember from 'ember';

export default Ember.Route.extend({
	
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
				else{
					this.set('usuario', user);
				}
				}else{
					this.transitionTo('login')
					}
			})
		})
	},
	model(){
		return Ember.RSVP.hash({
			sistema: this.get('store').createRecord('sistema'),
			usuarios: this.get('store').findAll('usuario')
		})
	},
	setupController(controller){
		this._super(...arguments)

		controller.set('usuario', this.get('usuario'))
	}
});
