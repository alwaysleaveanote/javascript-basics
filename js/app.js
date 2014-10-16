//never declare types (return, variable, parameter, etc.)
//functions can be variables and be passed to other functions
//there is only one gobal namespace for every page so vars can be overwritten.  
//can fix by doing
"use strict"; //old browsers create then destroy, newer browsers generate errors if overwritten

var name = 'Alex';

/*function sayHello(name) {
	alert('Hello ' + name);
}

function createName() {
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var number = 0;
	var name = "";
	for  (i = 0; i < Math.ceil(Math.random() * 15); i++) {
		number = Math.ceil(Math.random() * 26);
		name = name + alphabet[number];
	}
	return name;
}*/

function onReady() {
	var elem = document.getElementById('message');
	elem.innerHTML = 'Hello ' + name;
	var nameInput = document.getElementById('name-input');
	nameInput.value = name;
	nameInput.addEventListener('keyup', function() {
		elem.innerHTML = 'Hello ' + nameInput.value;
	});

}

document.addEventListener('DOMContentLoaded', onReady);
//sayHello(createName().toUpperCase());