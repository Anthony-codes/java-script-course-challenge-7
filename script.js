 // Function constructor
/*
 var john = {
 	name: 'john',
 	yearOfBirth: 1990,
 	job: 'teacher'
 };


var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	
	}








Person.prototype.calculateAge = this.calculateAge = function() {
		console.log(2016 - this.yearOfBirth);

};

Person.prototype.lastName = 'Smith';



var john = new Person('john', 1990, 'teacher');

john.calculateAge();

var jane = new Person('jane', 1969, 'designer');

var mark = new Person('mark', 1948, 'retired');


jane.calculateAge();
mark.calculateAge();
john.calculateAge();

console.log(jane.lastName);
console.log(john.lastName);
console.log(mark.lastName);

*/

//Object.create
// define an object that will act as a prototype, then create a new object based on that one
/*
var personProto = {
	caclulateAge: function() {
		console.log(2016 - this.yearOfBirth);
	}

};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane  = Object.create(personProto, {
	name: { value: 'jane'},
	yearOFBirth: { value: 1969},
	job: { value: 'designer'}

});
*/



// Primitives vs objects


//primitives


/*
var a = 23;
var b = a;

a = 46


console.log(a, b);


// objects
var obj1 = {

	name: 'John',
	age: 26
};

var obj2 = obj1;


obj1.age = 30

console.log(obj1.age, obj2.age);


//functions

var age = 27;
var obj = {
	name: 'Jonas';
	city: 'Lisbon'
};

function change(a,b) {
	a = 30
	b.city = 'San Franscisco';


}

change(age, obj);

console.log(age, obj.city);


*/

// Passing functions as arguments
// write a function that can recieve an array, and return a new result array
//and do the calculations based on a function that we passed into the calculations function
/*
var years = [1990, 1965, 1937, 2005, 1998];
//fn will be the function that does the calculations for us.
function arrayCalc(arr, fn) {
	var arrRes = [];                              //leave array empty for the array data to pass through.
	for (var i = 0; i < arr.length; i++) {       //loop over the array and return the result
		arrRes.push(fn(arr[i]));              //inside the loop we push our function that we pass into the other one.
	}
	return arrRes;
}

function calcAge (el) {
	return 2016 - el;

}


function fullAge(el) {
	return el >= 18;
}



function maxHeartRate(el) {
	if (el >= 18 && el <= 81){


	return Math.round(206.9 - (0.67 * el));
} else{
	return -1;
}

}


var ages = arrayCalc(years,calcAge); // dont call function here. it is called later in arrayCalc

var fullAges = arrayCalc(ages, fullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);




// our callback function fn is called with the i element of the input array. result is pushed into the empty array.
*/



////////////////////////////////////////////////////////////
// Closures
/*
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retitement(65);
var retirementIceLand = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceLand(1990);

*/





//retirement(66)(1990);


/*
closure summary 
- An inner function always has access to the variables and parameters of its outer function,
even after the outer function has returned.

*/

//////////////////////////////////////////////
// Bind call and apply


var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal'){
			console.log(' Good ' + timeOfDay + ' ladies and gentleman! I am ' + this.name + ' I am a ' + this.job + ' I am ' + this.age + ' years old.'); 
				
		} else if (style === 'friendly') {
			console.log('Hey whats up I am ' + this.name + ' I am a ' + this.job + 
				' I am ' + this.age + ' years old.' + ' Have a nice ' + timeOfDay);
		} else {
			console.log();
		}

	}
}

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};


john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
// this is called method borrowing, by using the call method.
// allows us to use the this variable, and set it to what we want. emily in this case.


//john.presentation.apply(emily, ['friendly', 'afternoon']);
//apply works similarly to call but instead of the this variable, it works with arrays.

//bind allows us to manipulate the this variable, but does not immediately call the function like the call method.
// it instead makes a copy of the function to store somewhere. useful for creating functions with pre set arguments.

var johnFriendly = john.presentation.bind(john, 'friendly');
// make a variable because it stores not calls, and needs to be stored somewhere. ie a variable
johnFriendly('evening');
// creating a function based on another function with preset parameters via bind is called carrying.

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');































































