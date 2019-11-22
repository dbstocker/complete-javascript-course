/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, diceDOM, gamePlaying;
diceDOM = document.querySelector(".dice");

init();

document.querySelector(".btn-roll").addEventListener("click", () => {
  if(gameIsPlaying) {
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
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  if(gameIsPlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;
    // update the UI
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    // document.querySelector('.btn-hold').setAttribute('disabled', 'true');

    // check if activeplayer wins game
    if (scores[activePlayer] >= 10) {
      document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
      diceDOM.style.display = 'none';
      document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
      document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
      gameIsPlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDOM.style.display = "none";
}

function init() {
  gameIsPlaying = true;
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  diceDOM.style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.add('active');
}
// document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`;

// var x = document.querySelector('#score-0').textContent;
