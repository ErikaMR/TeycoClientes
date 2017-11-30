import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
	cerrarsesion(){
			this.get('session').close()
			this.transitionToRoute('login')
		}
	}
});
