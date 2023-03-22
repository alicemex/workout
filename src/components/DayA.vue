<template>
  <div id="AliceA" class="excercises-page">
    <h1> Day A</h1>
    <p> Biceps - Triceps - Delt. ant. - Pectoral medio</p>
    <button class="rectangle"><router-link to="/bebedelacasa">Back</router-link></button>
   
      <div id="hip-trust" class="excercise-container"> 
        <h3>1 Peck fly invertido</h3>
        <p>Deltoide Posterior</p>
        <p><input @click="UpdatehipTrust()" class="checkBox" type="radio"  value="10" > Done </p>
          <transition name="fade">
              <div v-if="hipTrust">
                  <p>Repeat: 4x15 <input class="weight" type="text"  value="30"> Lbs</p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">
              </div>
          </transition>
      </div>


      <div id="kickBack" class="excercise-container"> 
        <h3>2 Peck fly</h3>
        <p>Pecho Medio</p>
        <p><input @click="UpdatekickBack()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="kickback">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="50"> Lbs</p>
                  <img  src="../assets/Alice/A/peckfly.gif">
                
              </div>
          </transition>
      </div>

      <div id="smithMachine" class="excercise-container"> 
        <h3>3 hammer with dumbells</h3>
        <p>Biceps</p>
        <p><input @click="UpdateSmith()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="smith">
                <p>Repeat: 4x12 <input class="weight" type="text"  value="6"> Lbs</p>
                  <p> Intecarlar brazo </p>
                  <img  src="../assets/C/martillos2x1.gif">
                
              </div>
          </transition>
      </div>

      <div id="ex-4" class="excercise-container"> 
        <h3>4 Pull over</h3>
        <p>Dorsales, pecho y triceps</p>
        <p><input @click="excercise4()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_four">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="30"> Lbs</p>
                <p>try to add 5lbs more in the last set </p>
                  <img  src="../assets/Alice/A/pullover.gif">
              </div>
          </transition>
      </div>
      <div id="ex-5" class="excercise-container"> 
        <h3>5 Cable bar biceps</h3>
        <p>Biceps y antebrazo</p>
        <p><input @click="excercise5()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_five">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="30"> Lbs</p>
                  <img  src="../assets/Alice/A/bicepscablebar.gif">  
              </div>
          </transition>
      </div>
      <div id="ex-6" class="excercise-container"> 
        <h3>6 pull rope triceps</h3>
        <p>Triceps</p>
        <p><input @click="excercise6()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_six">
                <p>Repeat: 4x12 <input class="weight" type="text"  value="30"> Lbs</p>
                  <img  src="../assets/C/triceps-rope.gif">
              </div>
          </transition>
      </div>

      <div id="ex-7" class="excercise-container"> 
        <h3>7 Fondos asistidos </h3>
        <p>Triceps y pecho</p>
        <p><input @click="excercise7()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_seven">
                <p>Repeat: 4x12 <input class="weight" type="text"  value="90"> Lbs</p>
                  <img  src="../assets/C/fondos-asistidos.jpg">                  
              </div>
          </transition>
      </div>
      <div id="ex-8" class="excercise-container"> 
        <h3>8 bar/polea remo al menton</h3>
        <p>trapecio y hombro</p>
        <p><input @click="excercise8()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="eight">
                <p>Repeat: 4x12 <input class="weight" type="text"  value="30"> Lbs</p>
                  <img  src="../assets/B/remoalmenton.gif">                  
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
    excersice_7_State: true,
    excersice_8_State: true
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
    },
    excercise8(){
      this.excersice_8_State =  !this.excersice_8_State;
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
      },
      eight(){
          return this.excersice_8_State;
      }   
  }
};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../style/excercises.css";
  @import "../style/global.css";
 </style>



      
     
