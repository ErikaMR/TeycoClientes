import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		this.$('select').material_select();
	}
});
