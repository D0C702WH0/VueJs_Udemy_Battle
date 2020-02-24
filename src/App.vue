<template>
    <div>
      <section class="row">
        <app-player
          v-for="(player, index) in players"
          :key="index"
          :player="player"
        />
      </section>
      <app-controls/>
      <app-log
        v-if="turns.length"
        :turns="turns"
      />
    </div>
</template>

<script>
import Player from './components/player'
import Controls from './components/controls'
import Log from './components/log'

export default {
  name: 'app',
  components: {
    appPlayer: Player,
    appControls: Controls,
    appLog: Log
  },
  computed: {
    players () {
      return this.$store.state.players
    },
    turns () {
      return this.$store.state.turns
    }
  }
}
</script>

<style>
</style>
