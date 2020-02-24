import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  const damage = calculateDamage(5, 12)
  state.players[0].playerHealth -= damage
  state.turns.unshift({
    isPlayer: false,
    text: `Monster hits player for ${damage}`
  })
  checkWinner(state)
}

const gameOver = (state) => {
  state.gameIsRunning = false
}

export default new Vuex.Store({
  state: {
    players: [{
      player: 'You',
      playerHealth: 100
    },
    {
      player: 'Monster',
      playerHealth: 100
    }
    ],
    gameIsRunning: false,
    turns: [],
    specialCount: 3,
    healthCount: 3
  },

  getters: {
    getPlayers: state => state.players,
    getGameStatus: state => state.gameIsRunning,
    getTurns: state => state.turns,
    getSpCount: state => state.specialCount,
    getHealthCount: state => state.healthCount
  },

  mutations: {
    startGame: function (state) {
      state.players[0].playerHealth = 100
      state.players[1].playerHealth = 100
      state.specialCount = 3
      state.healthCount = 3
      state.turns = []
      state.gameIsRunning = true
    },
    attack: function (state) {
      const damage = calculateDamage(3, 10)
      state.players[1].playerHealth -= damage
      state.turns.unshift({
        isPlayer: true,
        text: `Player hits monster for ${damage}`
      })
      if (checkWinner(state)) {
        return
      }
      monsterAttack(state)
    },
    spAttack: function (state) {
      if (state.specialCount <= 0) {
        alert('You have exceeded your special attacks number')
        return
      }
      const damage = calculateDamage(10, 20)
      state.players[1].playerHealth -= damage
      state.turns.unshift({
        isPlayer: true,
        text: `Player hits monster hard for ${damage}`
      })
      if (checkWinner(state)) {
        return
      }
      state.specialCount--
      monsterAttack(state)
    },
    heal: function (state) {
      if (state.healthCount <= 0) {
        alert("You doesn't have potions anymore...")
        return
      }
      if (state.players[0].playerHealth <= 90) {
        state.players[0].playerHealth += 10
        state.turns.unshift({
          isPlayer: true,
          text: 'Player heals for 10'
        })
      } else {
        state.players[0].playerHealth = 100
      }
      state.healthCount--
      monsterAttack(state)
    },
    giveUp: function (state) {
      gameOver(state)
    }
  }
})
