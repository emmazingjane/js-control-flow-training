console.log("login.js loaded");

let userLogin = [
		{
			userName: "bellabug",
			password: "bug"
		}
	]

var userPassword;
var fail = 0;
var loggedIn = false;


window.prompt("Enter password for user bellabug")
while (!loggedIn && fail < 3) {
	if (userPassword === userLogin.password) {
		alert("Welcome back")
		loggedIn = true;
	} else {
		alert("Password did not match, try again")
		fail += 1;
	}

}

	if (fail === 3) {
		alert("no more attempts can be made")
	}