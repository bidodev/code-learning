/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;

/* document.querySelector(
  `#current-${activePlayer}`
).innerHTML = `<em> ${dice} </em>`;
*/

//gettting a value and saving it inside a variable
// let myVar = document.querySelector(`#score-0`).textContent;
// console.log(myVar);

//manipulating the css (hiding the .dice)
//document.querySelector(`.dice`).style.display = "none";

//set all the values to 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//do something when click the roll dice button
document.querySelector(`.btn-roll`).addEventListener("click", () => {
  //generate a random number
  const dice = Math.floor(Math.random() * 6 + 1);

  //display the result
  const diceDOM = document.querySelector(`.dice`);
  diceDOM.style.display = "block";
  diceDOM.src = `img/dice-${dice}.png`;

  if (dice !== 1) {
    roundScore += dice;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
  }

  //setting a value
});
