var PersonaUser = function(name, persona, arcana, alias) {
	this.name = name;
	this.persona = persona;
	this.arcana = arcana;
	this.alias = alias;

};


var akira = new PersonaUser ('Akira', 'Arsene', 'Fool', 'Joker');

console.log(akira.persona);

PersonaUser.prototype.weakness = 'Fire element';

console.log(akira.weakness);

























