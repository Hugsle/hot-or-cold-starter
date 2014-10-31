$(document).ready(function() {

var guesses;
var counter;
var input;
    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    /*---Display Invaid Value Text---*/
function inputValidation() {
    if (input < 1 && input > 100){
          $("form").show("<div>Please enter a number between 1 to 100!</div>");
      }
}
inputValidation();
/*----Refresh Page---*/
function newGame() {
  $('.new').on('click', function() {
    counter = 0;
    num = generateNumber();
    guesses = [];
    $('#count').text(0);
    $('#feedback').text("Make your Guess!");
    $('#guessList').text("");
    $('#userGuess').text("");
  });
}
newGame();
/*---Generate Number---*/
function generateNumber() {

  var genNum = Math.floor((Math.random() * 100) + 1);
  console.log("Generated Random Number = " + genNum);
  return genNum;

}


/*---Capture/Evaluate Input---*/
    function userInput() {
      counter = 0;
      $('#count').text(counter);
      input = null;
      var num = generateNumber();
      guesses = [];
        $('#guessButton').on('click', function(e) {
            e.preventDefault();
            counter +=1;
            $('#count').text(counter);
            console.log(counter);
            input = $("#userGuess").val();
            console.log("The input was " + input);
            guesses.push(input);
            $('#guessList').append("<li>" + input + "</li>");
            console.log(guesses);

        if (input === num){  
          $('#feedback').text("You got it!");
            console.log("You got it!");
        } else if ((input - num) <= 15 && (input - num) > 0) {
          $('#feedback').text("Flaming Hot!");
            console.log("Hotter");
        } else if ((num - input) <= 15 && (num - input) > 0) {
          $('#feedback').text("Blistering Cold!");
            console.log("Colder");
        } else if ((input - num) <= 30 && (input - num) > 0) {
          $('#feedback').text("Getting Hotter!");
        } else if ((num - input) <= 30 && (num - input) > 0)
        ; $('#feedback').text("Getting Colder!");
        });
    }
    ;
    userInput();
});