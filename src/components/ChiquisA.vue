<template>
    <div class="container">
      <h1> Day A</h1>
      <p>Remember: Warm up before trainning <br> Start with low weights</p>
      <button><router-link to="/chiquisbonita">Back</router-link></button>
        <div id="hip-trust" class="excercise-container"> 
          <h3>1 Hip trust</h3>
          <p><input @click="UpdatehipTrust()" class="checkBox" type="radio"  value="10" > Done </p>
            <transition name="fade">
                <div v-if="hipTrust">
                    <p>Repeat: 4x10 <input class="weight" type="text"  value="10"> Lbs</p>
                    <p>  Option 1 begginer:</p>
                    <img  src="../assets/chiquis/A-chiquis/hip-trust.gif">
                    <p>  Option 2 advanced:</p>
                    <img src="../assets/chiquis/A-chiquis/hip-trust-2.gif">
                </div>
            </transition>
        </div>

        <div id="kickBack" class="excercise-container"> 
          <h3>2 Glute kickBack</h3>
          <p><input @click="UpdatekickBack()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="kickback">
                    <p>Repeat: 4x10 <input class="weight" type="text"  value="5"> Lbs </p>
                    <p> Option 1 - In the machine:</p>
                    <img  src="../assets/chiquis/A-chiquis/kickback.gif">
                    <p> Option 2 - In cable:</p>
                    <img  src="../assets/chiquis/A-chiquis/kickback2.gif">
                  
                </div>
            </transition>
        </div>

        <div id="smithMachine" class="excercise-container"> 
          <h3>smith Machine</h3>
          <p><input @click="UpdatekickBack()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="kickback">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="5"> Lbs </p>
                    <p> Begginer: Smith Machine</p>
                    <img  src="../assets/chiquis/A-chiquis/smithmachine.gif">
                    <p> Advanced: Free bar</p>
                    <img  src="../assets/chiquis/A-chiquis/squats-freebar.gif">
                  
                </div>
            </transition>
        </div>

  
    </div>
  </template>
  
  
  <script>
  export default {
    data: () => ({
      hiptrustState: true,
      kickBackState:true
    }),
    methods: {
      UpdatehipTrust() {
        this.hiptrustState = !this.hiptrustState;
      },
      UpdatekickBack() {
        this.kickBackState = !this.kickBackState;
      }
    },
    computed:{
        hipTrust() {
        return this.hiptrustState;
      },
        kickback() {
        return this.kickBackState;
      }
    }
  };

  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    @import "../style/chiquis.css"

    
   </style>
  
  