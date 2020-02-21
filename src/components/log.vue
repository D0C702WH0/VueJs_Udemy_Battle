<template>
  <section class="row log">
    <div class="small-12 columns">
      <ul>
        <li
        v-for="turn in turns"
        :key="turn"
        :class="[turn.isPlayer ? 'player-turn' : 'monster-turn']"
        >{{ turn.text }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    turns: Array
  }
}
</script>

<style>

.log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
}

.turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
}

.log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
}

.log ul li {
    margin: 5px;
}

.log ul .player-turn {
    color: blue;
    background-color: #e4e8ff;
}

.log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
}

</style>
