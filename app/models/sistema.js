import DS from 'ember-data';

export default DS.Model.extend({
	mac: DS.attr('string'),
	ubicacion: DS.attr('string'),
	nusuario: DS.attr('string'),
	contra: '',

	usuarios: DS.hasMany('usuario'),
	citums: DS.hasMany('cita')
});
