<template>
  <div class="small-6 columns">
    <h1 class="text-center">{{ player.player }}</h1>
    <div class="healthbar">
      <div
        class="healthbar text-center"
        style="background-color: green; margin: 0; color: white;"
        :style="{width: player.playerHealth + '%'}"
      >{{ player.playerHealth }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    player: Object
  }
}
</script>

<style>
.text-center {
  text-align: center;
}

.healthbar {
  width: 80%;
  height: 40px;
  background-color: #eee;
  margin: auto;
  transition: width 500ms;
}
</style>
