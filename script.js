//created the variable colors by calling the function generateRandomColors to call the initial 6 colors for the game
var colors = generateRandomColors(6);

//create variable for numSquares to 6. this variable will be called later during future calls to other functions.
var numSquares = 6;

//select and create variable for the squares
var squares = document.querySelectorAll(".square");

//select and create variable for picked color by calling the pickColor function
var pickedColor = pickColor();

//select and create variable for colorDisplay using getElementByID so that the HTML element is changed
var colorDisplay = document.getElementById('colorDisplay');

//select element with ID of message 
var messageDisplay = document.querySelector("#message");

//select and create variable for  h1 in index.html by using querySelector to select element with class of heading
var h1 = document.querySelector('.heading');

//select and create variable for reset button by using query selector to select element with ID of reset
var resetBtn = document.querySelector("#reset");

//select and create variable for the easy button by using query selector to select element with ID of easyBtn
var easyBtn = document.querySelector("#easyBtn");

//select the hard button
var hardBtn = document.querySelector("#hardBtn");

//easy button - begin by create an event listener for click that runs the following function
easyBtn.addEventListener("click", function(){
    //add the class selected to easyBtn so that the appearance of the easyBtn changes based on css file.
    easyBtn.classList.add("selected");

    ///remove the class selected from hardBtn so that the appearance of the easyBtn changes based on css file.
    hardBtn.classList.remove("selected");

    //change numSquares to be 3 so that it displays an easier grid of 3 instead of 6
    numSquares = 3

    //generate a new set of random colors
    colors = generateRandomColors(numSquares);

    //generate a new pickColor
    pickedColor = pickColor();

    //get new colors, remove the 3 squares under the new 3 squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    //revert the h1 background to the initial style
    h1.style.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";

    //remove mesage
    messageDisplay.textContent = "";

    //make sure colorDisplay shows new picked color
    colorText();
})

//hard button - begin by create an event listener for click that runs the following function
hardBtn.addEventListener("click", function(){
    //add the class selected to hardBtn so that the appearance of the easyBtn changes based on css file.
    hardBtn.classList.add("selected");

    ///remove the class selected from hardBtn so that the appearance of the easyBtn changes based on css file.
    easyBtn.classList.remove("selected");

    //change numSquares to be 6 so that it displays regular grid of 6    
    numSquares = 6

    //generate a new set of random colors
    colors = generateRandomColors(numSquares);

    //generate a new pickColor    
    pickedColor = pickColor();


    colorDisplay.textContent = pickedColor;

    //get new colors, make all 6 squares display in case the player had previously selected an easy game.   
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }

    //revert the h1 background to the initial style
    h1.style.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";

    //remove mesage
    messageDisplay.textContent = "";

    //make sure colorDisplay shows new picked color
    colorText();
})

//reset button
resetBtn.addEventListener("click", function(){

    //generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from array
    pickedColor = pickColor();
    
    //get new colors
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i]
    } 
    h1.style.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";

    //remove messageDisplay text
    messageDisplay.textContent = "";

    //make sure colorDisplay shows new picked color
    colorText();

})

//make sure colorDisplay shows picked color
colorText()

//beginning the game
for (var i = 0; i < squares.length; i++){
    // add colors to all squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to all squares
    squares[i].addEventListener("click", function(){
        // id color of clicked square
        var clickedColor = this.style.backgroundColor
        // verify if clicked color === pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetBtn.textContent = "Another round?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //get all squares
    for(var i = 0; i < squares.length; i++){
            //change color to match given color
        squares[i].style.background = color;
    }
}

function colorText(){
    colorDisplay.textContent = pickedColor.toUpperCase();
}

function pickColor(){
    //Math.random() picks a number between 0 and 1
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array 
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor())
    }
    //return array
    return arr;
}   

function randomColor(){
    //pick a "r" from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick a "g" from 0-255
    var g = Math.floor(Math.random() * 256)
    //pick a "b" from 0-255
    var b = Math.floor(Math.random() * 256)
    //return to string -> rgb(r, g, b) - make sure to add spaces because we want it to match
    return "rgb(" + r + ", " + g + ", " + b + ")"
}