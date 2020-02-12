new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gamisIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function () {
      this.gamisIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function () {
      let damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster for ${damage}`
      })
      if (this.checkWinner()) {
        return
      }

      this.monsterAttack()
    },
    spAttack: function () {
      const damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster for ${damage}`
      })
      if (this.checkWinner()) {
        return
      }

      this.monsterAttack()
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
        this.turns.unshift({
          isPlayer: true,
          text: `Player heals for 10`
        })
      } else {
        this.playerHealth = 100
      }
      this.monsterAttack()
    },
    giveUp: function () {
      this.gameOver()
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWinner: function () {
      if (this.monsterHealth <= 0) {
        alert('You won')
        this.gameOver()
        return true
      }else if (this.playerHealth <= 0) {
        alert('You Lost')
        this.gameOver()
        return true
      }
      return false
    },
    monsterAttack: function () {
      let damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits player for ${damage}`
      })
      this.checkWinner()
    },
    gameOver: function () {
      this.turns = []
      this.gamisIsRunning = false
    }
  }
})