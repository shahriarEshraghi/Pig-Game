'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
let currentScore, activePlayer, scores, isGameStarted;
document.querySelectorAll('.score').textContent = 0;
const init = function () {
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    isGameStarted = true;
    dice.style.display = 'block';
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
};
init();
const randomDiceRoll = function () {
    return Math.trunc(Math.random() * 6 + 1);
};

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};
rollDiceBtn.addEventListener('click', function () {
    if (isGameStarted) {
        let diceRoll = randomDiceRoll();

        dice.src = `dice-${diceRoll}.png`;
        if (diceRoll != 1) {
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            console.log('yek oomde');
            switchPlayer();
            console.log(activePlayer);
        }
    }

});
holdBtn.addEventListener('click', function () {
    if (isGameStarted) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        dice.style.display = 'none';
        if (scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            isGameStarted = false;
        } else {
            switchPlayer();
        }
    }

});
newBtn.addEventListener('click', function () {
    init();
})

