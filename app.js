new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gamisIsRunning: false
  },
  methods: {
    startGame: function () {
      this.gamisIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function () {
      this.monsterHealth -= this.calculateDamage(3, 10)

      if (this.checkWinner()) {
        return
      }

      this.playerHealth -=  this.calculateDamage(5, 12)
      this.checkWinner()
    },
    spAttack: function () {
      
    },
    heal: function () {
      
    },
    giveUp: function () {
      
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWinner: function () {
      if (this.monsterHealth <= 0) {
        alert('You won')
        this.gamisIsRunning = false
        return true
      }else if (this.playerHealth <= 0) {
        alert('You Lost')
        this.gamisIsRunning = false
        return true
      }
      return false
    }
  }
})