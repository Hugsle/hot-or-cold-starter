$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

});


function newGame() {

}
/*---Generate Number---*/

        var genNum = Math.floor((Math.random() * 100) + 1);
        console.log("Generated Random Number = " + genNum);

/*---Capture/Evaluate Input---*/
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

function inputEval() {

}
