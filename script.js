'use strict';
let currentScore = 0;
const rollDiceBtn = document.querySelector('.btn--roll');

const randomDiceRoll = function () {
    return Math.trunc(Math.random() * 6 + 1);
}
rollDiceBtn.addEventListener('click', function () {
    let diceRoll = randomDiceRoll();
    document.querySelector('.dice').src = `dice-${diceRoll}.png`;
    currentScore = currentScore + diceRoll;
    if (diceRoll == 1) {
        console.log('yek oomd ke');
        currentScore = 0;
    }
    document.querySelector('.current-score').textContent = currentScore;

});

