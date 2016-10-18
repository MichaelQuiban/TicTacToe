$(document).ready(function(){
	// Event Handler for click events on each of the square.
	$(".square").on('click', function (event) {
		// Debug Text to verify the squares work
		console.log("A Square has been chosen!");
		// Created 
		var squareSelected = $(this);
		console.log(this);
		//
		if (squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
			alert("This square has already been selected! Please select another");
		} else {

		}
	});
});