/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores, roundScores, activePlayer, gamePlaying;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



init()






document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {


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
        nextPlayer()
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
// we want to store round score inside 
// score and switch players
    scores[activePlayer] += roundScore;

    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'; 
        document.querySelector('.dice').style.display = 'none'; 
        document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        setTimeout(function() {if (activePlayer === 0){
            alert('Player 1 won the game!')}
            else{ alert('Player 2 won the gmae!')}}, 0500)
            
        
            setTimeout(init, 10000)
    }   else {
        nextPlayer()
        }
    }
})

function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector(".dice").style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init)

