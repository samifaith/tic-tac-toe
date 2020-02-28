//PREP for TIC TAC TOE
//P : player 1 choice, player 2 choice,
//R: X or O  on DOM, winner, draw, loser, points of wins
//E: win 3 in a row, 8 possible ways to win (3 up and down, 3 left to right, and 2 diagonal ways)
//P: Tic Tac Toe Exercise ->
//click to place x and o
// HOW TO SWAP
// CLICK ONE BOX AND HAVE IT DISPLAY X
// CLICK ONE BOX AND HAVE IT DISPLAY O

//win should be displayed in dom in the form of a counter,
// make game OOP
// create Scoreboard
// Select a box and display the player's selection
// Determine if player 1 or 2 win
// Reset button in case players want to play again
// Undo button if player makes mistake
// Tic tac toe grid made using border bottom and border right?
// Questions: how does the computer know how many times you win? Or where the x is and where the o is?

let winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let p1Score = 0;
let p2Score = 0;
let turn = 0;
let reset = document.querySelector("#reset");
let undo = document.querySelector("#undo");
let boxes = document.querySelectorAll(".box");

function displayMessage(msg) {
  document.getElementById("status").innerHTML = msg;
}

boxes.forEach( el => {
  el.addEventListener("click", (e) => {
    if(!e.target.classList.contains("clicked")) {
      e.target.classList.add("clicked")
      if(turn % 2 === 0){
        e.target.style.background = "red"
        e.target.classList.add("p1Clicked")
        displayMessage("PLAYER 1 TURN")
        turn++
      }else{
        e.target.style.background = "blue"
        e.target.classList.add("p2Clicked")
        displayMessage("PLAYER 2 TURN")
        turn++
      }
      checkWin()
    }
  })
})

function checkWin (){
  for(let i = 0; i<winCombinations.length; i++){
    const foo = winCombinations[i]
    const a = boxes[foo[0]]
    const b = boxes[foo[1]]
    const c = boxes[foo[2]]
    if (a.classList.contains("p1Clicked") && b.classList.contains("p1Clicked") && c.classList.contains("p1Clicked")){
      displayMessage("You Win P1!")
      increaseP1Score()
    }
    if (a.classList.contains("p2Clicked") && b.classList.contains("p2Clicked") && c.classList.contains("p2Clicked")){
      displayMessage("You Win P2!")
      increaseP2Score()
    }
  }
}

function increaseP1Score() {
  p1Score += 1;
  document.getElementById("player1").innerHTML = p1Score;
  displayMessage("YAY! YOU WIN BITCH!");
}

function increaseP2Score() {
  p2Score += 1;
  document.getElementById("player2").innerHTML = p2Score;
  displayMessage("YAY! YOU WIN HOE!");
}

reset.addEventListener("click", function () {
  document.querySelectorAll(".box").forEach( box => {
    box.style.background = ""
    box.classList.remove("clicked")
  })
});

undo.addEventListener("click", function () {
  displayMessage("NO TAKE BACKS")
});
