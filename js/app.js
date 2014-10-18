$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    /*---Display Invaid Value Text---*/
    if (input < 1 && input > 100){
          $("form").show("<div>Please enter a number between 1 to 100!</div>");
        }

/*----Refresh Page---*/
function newGame() {
  $('.new').on('click', function() {
    location.reload();
  });
}
/*---Generate Number---*/
function generateNumber() {

  var genNum = Math.floor((Math.random() * 100) + 1);
  console.log("Generated Random Number = " + genNum);
  return genNum;

}


/*---Capture/Evaluate Input---*/
    function userInput() {

      var input = null;
      var num = generateNumber();
      var guesses = [];
        $('#guessButton').on('click', function(e) {
            e.preventDefault();
            input = $("#userGuess").val();
            console.log("The input was " + input);
            guesses.push(input);
            $('#guesslist').append("<li>" + guesses + "</li>");
            console.log(guesses);

        if (input > num){
            console.log("Higher");
        } else if (input < num) {
            console.log("Lower");
        } else if (input == num) {
            console.log("You got it!");
        }
        ;
        });
    }
    ;
    userInput();
});