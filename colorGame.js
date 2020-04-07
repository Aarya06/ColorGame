var numSquares = 6;

var	colors = [];

var pickedColor;

var squares = document.querySelectorAll(".square");

var h1 = document.querySelector("h1");

var colorDisplay = document.querySelector("#colorDisplay");

var messageDisplay = document.querySelector("#messageDisplay");

var reset = document.querySelector("#reset");

var modes = document.querySelectorAll(".mode");

init();

function init(){
	
	setupModes();

    setupSquares();

	resetgame();

}

function setupModes(){
	for (var i = 0; i < modes.length; i++) {
		modes[i].addEventListener("click", function(){
	        modes[0].classList.remove("selected");
	        modes[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

			resetgame();
		});
    }
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				reset.textContent = "Play Again?";
				changeColor(pickedColor);
				h1.style.backgroundColor = pickedColor;
				console.log( clickedColor + " " + pickedColor);
			}
			else{
				//alert("WRONG");
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
				console.log( clickedColor + " " + pickedColor);
			}
		});
	}
}


function resetgame(){
	colors = generateRandomColors(numSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++)
    	{
    		if (colors[i]){
    			squares[i].style.display = "block";
    		    squares[i].style.backgroundColor = colors[i];
    	    }else{
    	    	squares[i].style.display = "none";
    	}
    }

    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
}

reset.addEventListener("click", function(){

	resetgame();

});



function changeColor(color){

	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColors(num){

	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}

	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);
	
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r +", "+ g +", "+ b +")";
}
