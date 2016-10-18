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
		if (squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
			alert("This square has already been selected! Please select another.");
		} else {
			// Bounce back and forth between the two players.
			if (player === 1){
				squareSelected.addClass('ex');
				player = 2;
			} else {
				squareSelected.addClass('oh');
				player = 1;
			}
		}
	});
});