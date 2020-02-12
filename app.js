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

      if (this.monsterHealth <= 0) {
        alert('You won')
        return this.gamisIsRunning = false
      }

      this.playerHealth -=  this.calculateDamage(5, 12)

      if (this.playerHealth <= 0) {
        alert('You Lost')
        return this.gamisIsRunning = false
      }
    },
    spAttack: function () {
      
    },
    heal: function () {
      
    },
    giveUp: function () {
      
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    }
  }
})