<template>
    <div>
      <section class="row">
        <app-player
          v-for="(player, index) in getPlayers"
          :key="index"
          :player="player"
        />
      </section>
      <app-controls/>
      <app-log
        v-if="getTurns.length"
        :turns="getTurns"
      />
    </div>
</template>

<script>
import Player from './components/player'
import Controls from './components/controls'
import Log from './components/log'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    appPlayer: Player,
    appControls: Controls,
    appLog: Log
  },
  computed: {
    ...mapGetters([
      'getPlayers', 'getTurns'
    ])
  }
}
</script>

<style>
</style>
