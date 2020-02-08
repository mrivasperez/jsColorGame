var colors = generateRandomColors(6);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('.heading');
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
   
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
    h1.style.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";
    messageDisplay.textContent = "";
    colorText();

})

hardBtn.addEventListener("click", function(){
    
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected"); 
    numSquares = 6
    colors = generateRandomColors(numSquares);  
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }

    h1.style.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";

    messageDisplay.textContent = "";

    colorText();
})

resetBtn.addEventListener("click", function(){

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i]
    } 

    h1.style.backgroundImage = "linear-gradient(315deg, #485461 0%, #28313b 74%)";
    messageDisplay.textContent = "";
    colorText();

})

colorText()

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){

        var clickedColor = this.style.backgroundColor;

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