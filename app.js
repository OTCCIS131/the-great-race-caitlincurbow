
    let app = new Vue({
        el: '#app',
        data: {
            racing: false, 
            winner: null,
            shaggy: 0,
            scooby: 0,
            tick: 0,
            interval: null,
        },
        computed: {
            winning: function() {
                
                return this.shaggy > this.scooby ? this.shaggy : this.scooby
            },
            scoobyClass(){

            },
            shaggyClass() {
                
            },
            shaggyStyle() {
                return {
                    left: `${this.shaggy}vw`
                }
            },
            scoobyStyle() {
                return {
                    left: `${this.scooby}vw`
                }
            }
        },
        methods: {
            startRace() {
                this.racing = true
                this.interval = setInterval(() => {
                    this.progressPlayer()
                }, 50);
            },
            progressPlayer() {
                this.tick++
                this.shaggy += Math.random()
                this.scooby += Math.random()
                this.checkVictory()                    
            },
            checkVictory() {
                if (this.shaggy == this.scooby) return
                
                if (this.shaggy >= 80) {
                    
                    // this.shaggy.winner = true;
                    // this.scooby.winner = false;
                    this.callVictory();
                }
                if (this.scooby >= 80) {

                    // this.shaggy.winner = false;
                    // this.scooby.winner = true;
                    this.callVictory();
                }
            },
            callVictory() {
                //this.winner
                clearInterval(this.interval);
                this.shaggy = 0;
                this.scooby = 0;
            }
        }
    })
