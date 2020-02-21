<template>
  <div>
    <section class="row controls" v-if="!gamisIsRunning">
      <div class="small-12 columns">
        <button id="start-game" @click="startGame">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls" v-else>
      <div class="small-12 columns">
        <button id="attack" @click="attack">ATTACK</button>
        <button id="special-attack" @click="spAttack">SPECIAL ATTACK({{ specialCount }})</button>
        <button id="heal" @click="heal">Healing potions({{ healthCount }})</button>
        <button id="give-up" @click="giveUp">GIVE UP</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    gameIsRunning: Boolean,
    attack: Function,
    spAttack: Function,
    heal: Function,
    giveUp: Function,
    startGame: Function,
    healthCount: Number,
    specialCount: Number
  }
}
</script>

<style>
</style>
