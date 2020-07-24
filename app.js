/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores, roundScores, activePlayer;


scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {

// 1. random number to generate
let dice = Math.floor(Math.random() * 6) + 1;

// 2. Display the result
let diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';

// 3. Add points for round score, if a 1 is rolled swith players and clear roundScore
 if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
        roundScore = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector(".dice").style.display = 'none';
    }

    

});

document.querySelector('.btn-hold').addEventListener('click', function() {
// we want to store round score inside 
// score and switch players
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    // check if player won the game

}


)


