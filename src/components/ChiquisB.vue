<template>
    <div class="container">
      <h1> Day B </h1>
      <p>back, soulders, chest</p>
      <button><router-link to="/chiquisbonita">Back</router-link></button>
        <div id="hip-trust" class="excercise-container"> 
          <h3>1 Jalon supino</h3>
          <p><input @click="UpdatehipTrust()" class="checkBox" type="radio"  value="10" > Done </p>
            <transition name="fade">
                <div v-if="hipTrust">
                    <p>Repeat: 4x10 <input class="weight" type="text"  value="15"> Lbs</p>
                    <p>  Option 1 begginer:</p>
                    <img  src="../assets/B/jalon-supino.gif">
                </div>
            </transition>
        </div>

        <div id="kickBack" class="excercise-container"> 
          <h3>2 Chest press neutral </h3>
          <p><input @click="UpdatekickBack()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="kickback">
                    <p>Repeat: 4x14 <input class="weight" type="text"  value="15"> Lbs </p>
                    <p> In the machine:</p>
                    <img  src="../assets/B/chest-press-neutro.gif">                 
                </div>
            </transition>
        </div>

        <div id="smithMachine" class="excercise-container"> 
          <h3>3 Shoulder press</h3>
          <p><input @click="UpdateSmith()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="smith">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="5"> Lbs </p>
                    <p> Machine</p>
                    <img  src="../assets/B/shoulder-press-machine.gif">                  
                </div>
            </transition>
        </div>

        <div id="ex-4" class="excercise-container"> 
          <h3>4 Dominada asistida</h3>
          <p><input @click="excercise4()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_four">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="80"> Lbs </p>
                    <p> More weight you add, the more easy it is.</p>
                    <img  src="../assets/B/dominada-asistida.webp">                  
                </div>
            </transition>
        </div>
        <div id="ex-5" class="excercise-container"> 
          <h3>5 Pec fly with machine</h3>
          <p><input @click="excercise5()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_five">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="10"> Lbs </p>
                    <p> Pec flies correct way</p>
                    <img  src="../assets/B/peckfly.gif">
                    <p> Correct way</p>
                    <img  src="../assets/B/peckfly2.gif">                  
                </div>
            </transition>
        </div>
        <div id="ex-6" class="excercise-container"> 
          <h3>6 Remo seated with triangle </h3>
          <p><input @click="excercise6()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_six">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="20"> Lbs </p>
                    <p> Triangle</p>
                    <img  src="../assets/B/remo-con-triangulo.png">                           
                </div>
            </transition>
        </div>

        <div id="ex-7" class="excercise-container"> 
          <h3>7 Body weight Back Extension </h3>
          <p><input @click="excercise7()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_seven">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="0"> Lbs </p>
                    <p> Begginner: No weight added </p>
                    <img  src="../assets/B/back-extension.gif">                             
                </div>
            </transition>
        </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data: () => ({
      hiptrustState: true,
      kickBackState:true,
      smithState:true,
      excersice_4_State: true,
      excersice_5_State: true,
      excersice_6_State: true,
      excersice_7_State: true
    }),
    methods: {
      UpdatehipTrust() {
        this.hiptrustState = !this.hiptrustState;
      },
      UpdatekickBack() {
        this.kickBackState = !this.kickBackState;
      },
      UpdateSmith() {
        this.smithState = !this.smithState;
      },
      excercise4(){
        this.excersice_4_State = !this.excersice_4_State;
      },
      excercise5(){
        this.excersice_5_State =  !this.excersice_5_State;
      },
      excercise6(){
        this.excersice_6_State =  !this.excersice_6_State;
      },
      excercise7(){
        this.excersice_7_State =  !this.excersice_7_State;
      }
    },
    computed:{
        hipTrust() {
        return this.hiptrustState;
      },
        kickback() {
        return this.kickBackState;
      },
        smith(){
        return this.smithState;
        },
        ex_four(){
            return this.excersice_4_State;
        },
        ex_five(){
            return this.excersice_5_State;
        },
        ex_six(){
            return this.excersice_6_State;
        },
        ex_seven(){
            return this.excersice_7_State;
        }
    }
  };

  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    @import "../style/chiquis.css"
   </style>
  
  