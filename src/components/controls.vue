<template>
  <div>
    <section class="row controls" v-if="!getGameStatus">
      <div class="small-12 columns">
        <button id="start-game" @click="startGame">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls" v-else>
      <div class="small-12 columns">
        <button id="attack" @click="attack">ATTACK</button>
        <button id="special-attack" @click="spAttack">SPECIAL ATTACK({{ getSpCount }})</button>
        <button id="heal" @click="heal">Healing potions({{ getHealthCount }})</button>
        <button id="give-up" @click="giveUp">GIVE UP</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getHealthCount', 'getSpCount', 'getGameStatus'
    ])
  },
  methods: {
    startGame () {
      this.$store.commit('startGame')
    },
    attack () {
      this.$store.commit('attack')
    },
    spAttack () {
      this.$store.commit('spAttack')
    },
    heal () {
      this.$store.commit('heal')
    },
    giveUp () {
      this.$store.commit('giveUp')
    }
  }
}
</script>

<style scoped>
.controls {
  margin-top: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 6px #ccc;
}

button {
  font-size: 20px;
  background-color: #eee;
  padding: 12px;
  box-shadow: 0 1px 1px black;
  margin: 10px;
}

#start-game {
  background-color: #aaffb0;
}

#start-game:hover {
  background-color: #76ff7e;
}

#attack {
  background-color: #ff7367;
}

#attack:hover {
  background-color: #ff3f43;
}

#special-attack {
  background-color: #ffaf4f;
}

#special-attack:hover {
  background-color: #ff9a2b;
}

#heal {
  background-color: #aaffb0;
}

#heal:hover {
  background-color: #76ff7e;
}

#give-up {
  background-color: #ffffff;
}

#give-up:hover {
  background-color: #c7c7c7;
}
</style>
