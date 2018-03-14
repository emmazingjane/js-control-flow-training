console.log("security_questions.js loaded");

var securityQuestions = [
	{ question: "What is your date of birth?",
	  expectedAnswer: "Canada"
	},

	{ question: "What is your first pet's name",
	  expectedAnswer: "Fido"
	},

	{ question: "What is your favorite color?",
	  expectedAnswer: "purple"
	},
]

for (var i = 0; i < securityQuestions.length; i++) {
	var userAnswer = securityQuestions[i].question;
 	if (userAnswer !== securityQuestions[i].expectedAnswer) {
 		window.prompt("Incorrect unable to access acount")
 		break
 	};

}
