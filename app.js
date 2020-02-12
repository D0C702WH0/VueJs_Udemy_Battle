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
        }
    }
})