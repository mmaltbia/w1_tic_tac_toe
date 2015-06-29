// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here

/******************************************************
*  Algorithm: t
*  Tic tac toe game uses piece of (box) objects that has three states: x, o, and blank.
*  winning category: three horizontal, three vertical, and two diagonal.
*  psudocode:
*/
var boardGame = document.querySelector("#board");
var boxes = document.querySelectorAll("div.box");
var playerTurn = "X";
var Omoves=[];
var Xmoves =[];
var counter = 0;
var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7], [1,5,9],[3,5,7],[3,6,9],[2,5,8]];
var resetButton = document.querySelector("#reset");

function switchTurn() {
  if (playerTurn === "X"){
    playerTurn = "O";
  }
  else {
    playerTurn = "X";
  }
};

for (var i = 0; i < boxes.length; i ++){
boxes[0].getAttribute("id")
}


function XorO (){
  if (playerTurn === "X"){
    console.log("player's Turn", playerTurn)
    this.innerText = "X";
    Xmoves.push(parseInt(this.getAttribute("id")));
    switchTurn();
    console.log("Xmoves", Xmoves);
    checkWinning(Xmoves, "X Player");
    counter ++;
    console.log("counter", counter)
    checkCounter();
  }
  else {
    console.log("player's Turn", playerTurn)
    this.innerText = "O"
    Omoves.push(parseInt(this.getAttribute("id")));
    switchTurn();
    console.log("Omoves", Omoves);
    checkWinning(Omoves, "O Player");
    counter ++;
    console.log("counter", counter)
    checkCounter();
  }
};

var listenerXorO = function(){
  for (var i = 0; i<boxes.length; i++){
    boxes[i].addEventListener("click", XorO);
  }
};


function checkWinning(movesArray, name){
for (var i = 0; i < winningCombos.length; i++) {
  var winCounter = 0;

 for (var j= 0; j < winningCombos[i].length; j++) {
   if(movesArray.indexOf(winningCombos[i][j]) !== -1) {
      winCounter ++
      console.log("win", winCounter);
   }
 
 };
   if (winCounter === 3){
    alert("You win " + name + "!")
   } 
};
}

function checkCounter(){
  if (counter === 9){
    alert("TIE GAME!")
  }
}

function clearBoard(){
  resetButton.addEventListener("click", function(){
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    };
    counter = 0;
  })
 }


function gameStarts(){
listenerXorO();
clearBoard();
}


gameStarts();

});



// var btn_0 = document.getElementById("btn-0")
// var btn_1 = document.getElementById("btn-1")
// var btn_2 = document.getElementById("btn-2")
// var btn_3 = document.getElementById("btn-3")
// var btn_4 = document.getElementById("btn-4")
// var btn_5 = document.getElementById("btn-5")
// var btn_6 = document.getElementById("btn-6")
// var btn_7 = document.getElementById("btn-7")
// var btn_8 = document.getElementById("btn-8")

// var btnArr = [btn_0, btn_1, btn_2, btn_3, btn_5, btn_6, btn_7, btn_8];

// var listener = function(){
// 	for(var i=0; i<btnArr.length)
// }

// playerTurn = "X";

// function switchTurn(){
// 	if (playerTurn === "X"){
// 		console.log(playerTurn);
// 		this.innertext= "X";
// 		switchTurn();
// 	}
// }



// switchTurn();


// var addX = function(){
// 	this.innertext = "X";
// 	counter++;
// 	// console.log("counter:" counter);
// }

// var addY = function(){
// 	this.innertext = "Y"
// 	counter++;
// 	// console.log("counter": counter);
// }

// var XorO = function(){
// 	if (playerTurn === "x"){
// 		this.innerText ="x";
// 		swithTurn ();
// 	}
// }

// __________________
// |
// Counter Function  |
// __________________|
// var counter = 0;

// var checkCounter = function (){
// 	if (counter === 0){
// 		console.log("It's player 1's turn!");
// 		// playerX();
// 	}
// 	else if (counter === 1){
// 		// playerY();
// 	}
// 	else if (counter === 2){
// 		// playerX();
// 	}
// 	else if (counter === 3){
// 		// playerY();
// 	}
// 	else if (counter === 4){
// 		// playerX();
// 	}
// 	else if (counter === 5){
// 		// playerY();
// 	}
// 	else if (counter === 6){
// 		// playerX();
// 	}
// 	else if (counter === 7){
// 		// playerY();
// 	}
// 	else if (counter === 8){
// 		// playerX();
// 	}
// 	else if (counter === 9){
// 		// playerX();
// 	}
// 	else {
// 		alert("Game Over");
// 	}
// }







// var click1 = function() {
// for(var i=0; i < btnArr.length + 1; i++) {
//            btnArr[i].addEventListener("click", function(){
//            return;
//          })
//            console.log(i);
// }}

// click1();

// btn_0.addEventListener("click", function(){
//     event.preventDefault(); // SUPER IMPORTANT PART
//     btn_0.style.color = "red";

// })

// var buttons = document.getElementsByClassName("boardbtn");
// var allBtns = buttons;
// var btnId = [];
            
// // Adds buttons to btnId Array

// var assignBtnID = function() {
//     for(i = 0; i < buttons.length; i++){
//     var id = document.getElementById("btn-"+i);
//     btnId.push(id);
//     }
// }

// assignBtnID();
// console.log(btnId);

// buttons.onclick = function() {
//     for(i = 0; i < btnId.length; i++){
//         btnId[i].innerHTML = "x";
//     }
// }




// button1.addEventListener("click", function() {
//     event.preventDefault(); // SUPER IMPORTANT PART
//   	button1.innerHTML = "x";
// });



