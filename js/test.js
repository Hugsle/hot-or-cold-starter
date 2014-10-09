$(document).ready(function() {
    
        var genNum = Math.floor((Math.random() * 100) + 1);
        console.log("Generated Random Number = " + genNum);

    
    function userInput() {

        $('#guessButton').on('click', function(e) {
            e.preventDefault();
            var input = $("#userGuess").val();
            console.log("The input was " + input);
        if (input > genNum){
            console.log("Higher");
        } else if (input < genNum) {
            console.log("Lower");
        } else if (input == genNum) {
            console.log("You got it!");
        }
        ;
        });
    }
    ;
    userInput();
});


/*$(document).ready(function() {

		var num = Math.floor((Math.random() * 100) + 1);
		console.log("Generated Random Number = "+ num);
function userInput(input) {
	$('#guessButton').on('click', function(e){
		e.preventDefault();
		input = $("#userGuess").val();
		console.log("The input was " + input);
		if (input > num) {
    		console.log("Higher");
 		} else if (input < num) {
    		console.log("Lower");
  		} else if (input == num) {
			console.log("You got it!");
  		}
  });
};
userInput();
});

/*function inputEval () {
	userInput();
  if (userInput() > num) {
    console.log("Higher");
  } else if (userInput() < num) {
    
    console.log("Lower");
  } else if (userInput() == num) {
	
	console.log("You got it!");
  }
  }
inputEval();
});*/