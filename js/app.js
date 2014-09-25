$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


function newGame() {

}

function genNum(num) {
	var num = Math.floor((Math.random() * 100) + 1);
	return num;
}
genNum();

function userFeedback() {
	
}