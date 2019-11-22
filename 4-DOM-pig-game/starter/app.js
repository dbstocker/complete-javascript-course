/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, diceDOM;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

diceDOM = document.querySelector(".dice");

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", () => {
  // 1. random number 1-6
  let dice = Math.floor(Math.random() * 6) + 1;

  // 2. display result
  diceDOM.style.display = "block";
  diceDOM.src = `dice-${dice}.png`;
  // document.querySelector(`#current-${activePlayer}`).textContent = dice;

  // 3. update round score if roll != 1
  if (dice !== 1) {
    // add score
    roundScore += dice;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {
    // next player
    nextPlayer();
    
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  // add current score to global score
  scores[activePlayer] += roundScore;
  // update the UI
  document.querySelector(`#score-${activePlayer}`).textContent =
    scores[activePlayer];
  nextPlayer();
  // check if activeplayer wins game
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDOM.style.display = "none";
}
// document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`;

// var x = document.querySelector('#score-0').textContent;
