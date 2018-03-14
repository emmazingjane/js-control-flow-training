console.log("login.js loaded");

var userLogin = [
		{
			userName: "bellabug",
			password: "bug"
		}
	]

var userPassword;
var fail = 0;
var loggedIn = false;



while (!loggedIn && fail < 3) {
	userPassword = window.prompt("Enter password for user bellabug")
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