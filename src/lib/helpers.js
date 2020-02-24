const calculateDamage = (min, max) => {
  return Math.max(Math.floor(Math.random() * max) + 1, min)
}

const checkWinner = (state) => {
  if (state.players[1].playerHealth <= 0) {
    alert('You won')
    gameOver()
    return true
  } else if (state.players[0].playerHealth <= 0) {
    alert('You Lost')
    gameOver(state)
    return true
  }
  return false
}

const monsterAttack = (state) => {
  state.players[0].playerHealth -= calculateDamage(5, 12)
  state.turns.unshift({
    isPlayer: false,
    text: `Monster hits player for ${calculateDamage(5, 12)}`
  })
  checkWinner(state)
}

const gameOver = (state) => {
  state.gameIsRunning = false
}

module.exports = { gameOver, monsterAttack, checkWinner, calculateDamage }
