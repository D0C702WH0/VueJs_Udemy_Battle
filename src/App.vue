<template>
  <section class="row">
    <app-player
      v-for="player in players"
      :key="player"
      :player="player.player"
      :playerHealth="player.playerHealth"
    />
  </section>
</template>

<script>
import Player from './components/player'
export default {
  name: 'app',
  components: {
    appPlayer: Player
  },
  data () {
    return {
      players: [
        {
          player: 'You',
          playerHealth: 100
        },
        {
          player: 'Monster',
          playerHealth: 100
        }
      ],
      gamisIsRunning: false,
      turns: [],
      specialCount: 3,
      healthCount: 3
    }
  },
  methods: {
    startGame: function () {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.specialCount = 3
      this.healthCount = 3
      this.turns = []
      this.gamisIsRunning = true
    },
    attack: function () {
      const damage = this.calculateDamage(3, 10)
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
      if (this.specialCount <= 0) {
        alert('You have exceeded your special attacks number')
        return
      }
      const damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster hard for ${damage}`
      })
      if (this.checkWinner()) {
        return
      }
      this.specialCount--
      this.monsterAttack()
    },
    heal: function () {
      if (this.healthCount <= 0) {
        alert("You doesn't have potions anymore...")
        return
      }
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
        this.turns.unshift({
          isPlayer: true,
          text: 'Player heals for 10'
        })
      } else {
        this.playerHealth = 100
      }
      this.healthCount--
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
      } else if (this.playerHealth <= 0) {
        alert('You Lost')
        this.gameOver()
        return true
      }
      return false
    },
    monsterAttack: function () {
      const damage = this.calculateDamage(5, 12)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits player for ${damage}`
      })
      this.checkWinner()
    },
    gameOver: function () {
      this.gamisIsRunning = false
    }
  }
}
</script>

<style>
</style>
