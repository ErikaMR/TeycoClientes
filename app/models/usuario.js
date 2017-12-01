import DS from 'ember-data';

export default DS.Model.extend({
	uid: DS.attr('string'),
	nombre: DS.attr('string'),
	apellido: DS.attr('string'),
	email: DS.attr('string'),
	password: '',
	perfil: DS.attr('boolean'),

	preguntas: DS.hasMany('pregunta'),
	sistemas: DS.hasMany('sistema'),
	citums: DS.hasMany('cita')
});
