const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
let scores = [0, 0];
let activeplayer = 0;

rollBtn.addEventListener('click', function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');

  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 1 ? 0 : 1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

holdBtn.addEventListener('click', function () {
  scores[activeplayer] += currentScore;
  document.getElementById(`score--${activeplayer}`).textContent =
    scores[activeplayer];
    if
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});
