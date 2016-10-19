// Write code on a white board
//Disadvantage to computer: Syntax highlighting, so much aids, not really thinking it through. Practice with hand!
//Data Structure: Stacks, and queues, push, pop, NQ, DQ. First in first out, last in first out. Linked lists.
//Node, knows itself and what comes next. How many items in this linked list, go to this node. <--- Study
//Line of people holding a code to the guy infront of him, standing at the end, how many guys in that line?
//Add an item from a list, delete an item from the list, middle of the row, pull a guy out with the red or blue coat.
//Double linked list: Whats infront and whats behind you, go both ways, forward and backwards.
//Trees: Where you say, you have a node, and a node has children, a binary tree has two children, left right, it can also
//go multiple levels deep.
//Special class of a tree: Binary Search Tree <--- We'll work on this. Series of numbers, children the one on the left
//less than or greater than a number.
//Google Balanced binary search tree. ( Graphs, connected by links ) <--- look up, facebook uses?

$(document).ready(function() {
	var player = 1;

	// Event Handler for click events on each of the square.
	$(".square").on('click', function (event) {
		// Debug text to verify the squares work
		console.log("A square has been chosen!");
		// Grab each square that is clicked.
		var squareSelected = $(this);
		//Debug text to display what 'this' is.
		console.log(this);
		// When the square has a class of 'fa-heart' or 'fa-circle' display a message.
		if (squareSelected.hasClass('fa fa-heart') || squareSelected.hasClass('fa fa-circle-thin')) {		
		} else {
			// Bounce back and forth between the two players and decide a winner.
			if (player === 1) {
				squareSelected.addClass("fa fa-heart");
				console.log("heart added");
				if(whowondisgame("fa fa-heart")) {
					// Replace with appended results somewhere
					//alert("Congrats! Player " + player + " has won!");
					$(".winner").append("good job");
				} else {
				  player = 2;
				}
			} else {
				squareSelected.addClass("fa fa-circle-thin");
				if(whowondisgame("fa fa-circle-thin")) {
					// Replace with appended results somewhere
					alert("Congrats! Player " + player + " has won!");	
				} else {
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
		event.preventDefault();
		$(".square").removeClass("fa fa-heart fa-circle-thin ");
	});

});