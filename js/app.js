$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });
    /*---Display Invaid Value Text---
    if (input < 1 && input > 100){
          $("form").show("<div>Please enter a number between 1 to 100!</div>");
        }*/

/*----Refresh Page---*/
function newGame() {
  $('.new').on('click', function() {
    counter = 0;
    num = generateNumber();
    guesses = [];
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
      var counter = 0;
      $('#count').text(counter);
      var input = null;
      var num = generateNumber();
      var guesses = [];
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

        if (input == num){
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