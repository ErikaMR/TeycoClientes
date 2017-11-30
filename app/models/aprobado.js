import DS from 'ember-data';

export default DS.Model.extend({
	pid: DS.attr('string'),
	nombre: DS.attr('string')
});
