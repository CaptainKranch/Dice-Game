let player1Score = 0
let player2Score = 0
let playerTurn = true
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function reset() {
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
}

rollBtn.addEventListener("click", function() {
  let randomNum = Math.floor(Math.random() * 6 ) + 1
  if(playerTurn) {
    player1Score += randomNum
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNum
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
    message.textContent = 'Player 2 turn'
  }else {
    player2Score += randomNum
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNum
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    message.textContent = 'Player 1 turn'
  }

  if (player1Score >= 20) {
    message.textContent = 'Player 1 has won! 🥳'
    showDisplayButton()
  } else if (player2Score >=20) {
    message.textContent = 'Player 2 has won! 🎉'
    showDisplayButton()

  }
  playerTurn = !playerTurn
})

resetBtn.addEventListener('click', function() {
  reset()
})
