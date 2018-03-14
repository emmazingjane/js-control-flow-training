console.log("login.js loaded");

let userLogin = [
		{
			userName: "bellabug",
			password: "bug"
		}
	];

var userPassword;


window.prompt("Enter password for user bellabug")

	if (userPassword === userLogin.password) {
		alert("Welcome back")
	} else {
		alert("You are not welcome")
	}
