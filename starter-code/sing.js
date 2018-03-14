console.log("sing.js loaded");



var bottles = prompt("how many bottles of beer are there?");
var numberBottles;

while (numberBottles > 1) {
	console.log( numberBottles + " " + bottles +
		" "+ "on the wall")
	console.log( numberBottles + " " + " of beer")
	console.log("Take one down and pass it around,")
	numberBottles = numberBottles - 1
}