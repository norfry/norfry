function askQuestions() {

		var firstName = prompt('What is your first name?');
		var lastName = prompt('What is your last name?');

		var fullName = firstName + ' ' + lastName;

		console.log('User is called ' + fullName); 

		var userAge = prompt('How old are you?');
		userAge = parseInt(userAge);

		console.log('Users age is ' + userAge);

		if (userAge >= 18) {
				console.log('User is an adult.');
		}

		else if (userAge >= 13) { 
				console.log('User is a teenager')
			}

		else {
				console.log('User is a child');
		}



		/*
		if the user's first name is general but NOT have surname as assembly, greet them. */

		if (firstName.toLowerCase() == "general" && lastName != "Assembly") {
			console.log('Hello General!');
		}


}







//when the page has loaded  -- in this case "function" means do this stuff

$(function () {


//when the user clicks the image, ask questions
$('img').on('click', askQuestions); 

//when the user clicks an h3
	$('h3').on ('click', function () {

 	//Hide the next element (find the exact h3 which the user jsut clicked on)
 	$(this).next().slideToggle(90);

	});




});