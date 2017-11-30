import Ember from 'ember';

export default Ember.Controller.extend({
	firebase: Ember.inject.service('firebaseApp'),
	store: Ember.inject.service(),
	actions:{
		registro(){
			let nombre = this.get('nombre')
			let apellido = this.get('apellido')
			let email = this.get('email')
			let contrasena = this.get('contrasena')
			let idusuario = this.get('idusuario')

			//this.get('store')=> query => aprobados => 	this.get('idusuario') => existe => continua
			this.get('store').query('aprobado', {
				equalTo: idusuario,
				orderBy: 'pid',
				limitToLast: 1
			}).then((aprobado)=>{
				console.log(aprobado)
				if(aprobado.get('firstObject')){
					this.get('firebase').auth().createUserWithEmailAndPassword(email, contrasena).then((usuario)=>{
					this.get('store').createRecord('usuario', {
					nombre: nombre,
					apellido: apellido,
					email: email,
					password: contrasena,
					uid: usuario.uid,
					perfil: false
					}).save();
					aprobado.get('firstObject').destroyRecord()
					this.transitionToRoute('iniciocliente')
				}).catch((error)=>{
					console.log(error)
				})
				
				} else alert("¡Algo no salió bien, aún NO estas registrado!!!")
			})
		}
	}
});
