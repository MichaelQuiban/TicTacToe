$(document).ready(function(){
	var player = 1;

	// Event Handler for click events on each of the square.
	$(".square").on('click', function (event) {
		// Debug text to verify the squares work
		console.log("A square has been chosen!");
		// Grab each square that is clicked.
		var squareSelected = $(this);
		//Debug text to display what 'this' is.
		console.log(this);
		// When the square has a class of 'ex' or 'oh' display a message.
		if (squareSelected.hasClass('fa fa-heart') || squareSelected.hasClass('fa fa-circle-thin')) {
			alert("This square has already been selected! Please select another.");
		} else {
			// Bounce back and forth between the two players.
			if (player === 1){
				squareSelected.addClass("fa fa-heart");
				if(whowondisgame("fa fa-heart")) {
					alert("Congrats! Player " + player + " has won!");
				} else {
				  player = 2;
				}
			} else {
				squareSelected.addClass("fa fa-circle-thin");
				if(whowondisgame("fa fa-circle-thin")) {
					alert("Congrats! Player " + player + " has won!");
				} else{
					player = 1;
				}
			}
		}
	});

	//Check if the player won by checking squares.
	function whowondisgame(letter) {
			//Horizontal win
		if ($(".sq1").hasClass(letter) && $(".sq2").hasClass(letter) && $(".sq3").hasClass(letter)) {
			return true;
		} else if ($(".sq4").hasClass(letter) && $(".sq5").hasClass(letter) && $(".sq6").hasClass(letter)) {
			return true;
		} else if ($(".sq7").hasClass(letter) && $(".sq8").hasClass(letter) && $(".sq9").hasClass(letter)) {
			return true;
			//Diagonal win
		} else if ($(".sq3").hasClass(letter) && $(".sq6").hasClass(letter) && $(".sq9").hasClass(letter)) {
			return true;
		} else if ($(".sq1").hasClass(letter) && $(".sq5").hasClass(letter) && $(".sq9").hasClass(letter)) {
			return true;
		} else if ($(".sq3").hasClass(letter) && $(".sq5").hasClass(letter) && $(".sq7").hasClass(letter)) {
			return true;
			// Misc Wins/Vertical
		} else if ($(".sq1").hasClass(letter) && $(".sq4").hasClass(letter) && $(".sq7").hasClass(letter)) {
			return true;
		} else {
			return false;
		} 
		 
	}
	//Reset the game
	$(".reset-game").on('click', function (event) {
		
	});

});