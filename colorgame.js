var colors = ["rgb(255, 0, 0)",
       "rgb( 0, 255, 0)",
     "rgb( 0, 0, 255)",
     "rgb(255, 255, 0)",
     "rgb(255, 0, 255)",
     " rgb( 0, 255, 255)", 
     ]

var colors = generateRandomColors(6);     
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colors of square
	messageDisplay.textContent = " ";
	this.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "#4682B4"
})

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i]

	//add click listener to square
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare with  pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TryAgain";
		}
	})
  };    

  function changeColors(color) {
  	//loop through all colors
  	for(var i = 0; i < squares.length; i++) {
  	//chnage each color to correct color
  	squares[i].style.backgroundColor = color;
    }
  }

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add random colors to array
	for(var i = 0; i < num; i++) {
		//random colors
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor() {
	//red random
	var r = Math.floor(Math.random() * 256)
	//green random
	var g = Math.floor(Math.random() * 256)
	//blue random
	var b = Math.floor(Math.random() * 256)
	"rgb(r, g, b)"
	return "rgb(" + r +", " + g +", " + b +")";
};


