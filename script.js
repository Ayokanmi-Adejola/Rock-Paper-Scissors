// DOM Elements
const scoreElement = document.querySelector('.score');
const choicesElement = document.querySelector('.choices');
const gameBoard = document.querySelector('.game-board');
const gameResult = document.querySelector('.game-result');
const resultText = document.querySelector('.result-text');
const playAgainBtn = document.querySelector('.play-again');
const rulesBtn = document.querySelector('.rules-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const userPickElement = document.querySelector('.user-pick');
const housePick = document.querySelector('.house-pick');
const resultMessage = document.querySelector('.result-message');

// Game variables
let score = localStorage.getItem('rpsScore') ? parseInt(localStorage.getItem('rpsScore')) : 0;
const choices = ['rock', 'paper', 'scissors'];

// Initialize the game
function init() {
  // Set initial score
  updateScore(score);
  
  // Add event listeners
  document.querySelectorAll('.choice').forEach(choice => {
    choice.addEventListener('click', handleChoice);
  });
  
  playAgainBtn.addEventListener('click', resetGame);
  rulesBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Handle user choice
function handleChoice(e) {
  // Get user choice
  const userChoice = e.currentTarget.dataset.choice;
  
  // Get house choice
  const houseChoice = getRandomChoice();
  
  // Determine winner
  const result = getWinner(userChoice, houseChoice);
  
  // Update score
  if (result === 'win') {
    updateScore(score + 1);
  } else if (result === 'lose') {
    updateScore(Math.max(0, score - 1));
  }
  
  // Show result
  showResult(userChoice, houseChoice, result);
}

// Get random choice for the house
function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine winner
function getWinner(userChoice, houseChoice) {
  if (userChoice === houseChoice) {
    return 'draw';
  }
  
  if (
    (userChoice === 'rock' && houseChoice === 'scissors') ||
    (userChoice === 'paper' && houseChoice === 'rock') ||
    (userChoice === 'scissors' && houseChoice === 'paper')
  ) {
    return 'win';
  }
  
  return 'lose';
}

// Update score
function updateScore(newScore) {
  score = newScore;
  scoreElement.textContent = score;
  localStorage.setItem('rpsScore', score);
}

// Show result
function showResult(userChoice, houseChoice, result) {
  // Hide game board
  gameBoard.style.display = 'none';
  
  // Show result
  gameResult.style.display = 'block';
  
  // Update user pick
  userPickElement.innerHTML = `
    <div class="choice ${userChoice}">
      <div class="choice-inner">
        <img src="./images/icon-${userChoice}.svg" alt="${userChoice}">
      </div>
    </div>
  `;
  
  // Empty house pick initially (placeholder)
  housePick.innerHTML = `
    <div class="choice placeholder">
      <div class="choice-inner placeholder-inner"></div>
    </div>
  `;
  
  // Update house pick with delay
  setTimeout(() => {
    housePick.innerHTML = `
      <div class="choice ${houseChoice}">
        <div class="choice-inner">
          <img src="./images/icon-${houseChoice}.svg" alt="${houseChoice}">
        </div>
      </div>
    `;
    
    // Show result message
    if (result === 'win') {
      resultText.textContent = 'You Win';
    } else if (result === 'lose') {
      resultText.textContent = 'You Lose';
    } else {
      resultText.textContent = 'Draw';
    }
    
    resultMessage.style.display = 'flex';
  }, 1000);
}

// Reset game
function resetGame() {
  // Hide result
  gameResult.style.display = 'none';
  resultMessage.style.display = 'none';
  
  // Show game board
  gameBoard.style.display = 'block';
  
  // Clear picks
  userPickElement.innerHTML = '';
  housePick.innerHTML = '';
}

// Open rules modal
function openModal() {
  modal.style.display = 'flex';
}

// Close rules modal
function closeModal() {
  modal.style.display = 'none';
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
