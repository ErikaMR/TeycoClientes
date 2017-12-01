import DS from 'ember-data';

export default DS.Model.extend({
	preg: DS.attr('string'),

	respuestas: DS.hasMany('respuesta'),
	usuario: DS.belongsTo('usuario')
});
