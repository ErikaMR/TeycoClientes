import DS from 'ember-data';

export default DS.Model.extend({
	motivo: DS.attr('string'),
	fecha: DS.attr('string'),
	lugar: DS.attr('string'),
	contacto: DS.attr('string'),

	usuario: DS.belongsTo('usuario'),
	sistema: DS.belongsTo('sistema')

});
