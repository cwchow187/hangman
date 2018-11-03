// Initialize Firebase
  

	$(document).ready(function(){
	
		//game start-button to create random word

	var words = ["points", "rebounds", "steals", "assists", "dunk", "three-pointer", 
	"block"];

	var randomWord = words[Math.floor(Math.random()*words.length)];
	console.log(randomWord);

	var seconds = 0;
		var timer;
		$('#time').text(seconds);

		function startTimer(){
			seconds++;
			$('#time').text(seconds);
			
		}

		$('#start').on('click', function(){
			timer = setInterval(startTimer, 1000);
				
		});
		
	var correctGuesses = [];
	var guesses = [];
	document.onkeyup = function(){
		var key = event.key;
		if (randomWord.indexOf(key)!=-1) {
			correctGuesses.push(key);
		}
		
		var display = "";
		
		//create if statement to decrease score if incorrect and alert you 
		//
		for (var i = 0; i < randomWord.length; i++){
			if (correctGuesses.indexOf(randomWord[i])!=-1){
				display += randomWord[i];
			}else {
				display += "_  ";
			}
		}

		//write code to check if display is equal to the word they're trying to guess and alert you won
		console.log(display, randomWord)
		if(display===randomWord){
			// alert('you won');
			clearInterval(seconds);
			 
			//push the score 
			// database.ref()..... 

		}
   		function myStopFunction() {
    		clearInterval(seconds);
		};
		myStopFunction();
		
		$("#individual-letters").empty();
		$("#individual-letters").append(display.toUpperCase());

		console.log(display);
	}
	
	});

	

