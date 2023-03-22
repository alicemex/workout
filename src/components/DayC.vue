<template>
  <div id="AliceA" class="excercises-page">
    <h1> Day C</h1>
    <p> Piernas, gluteo, pantorrilla</p>
    <button class="rectangle"><router-link to="/bebedelacasa">Back</router-link></button>
      <div id="hip-trust" class="excercise-container"> 
        <h3>1 Hack squats</h3>
        <p>Cuadriceps completos</p>
        <p><input @click="UpdatehipTrust()" class="checkBox" type="radio"  value="10" > Done </p>
          <transition name="fade">
              <div v-if="hipTrust">
                  <p>Repeat: 4x12 <input class="weight" type="text"  value="40"> Lbs</p>
                  <img  src="../assets/chiquis/A-chiquis/squat-hack.gif">
              </div>
          </transition>
      </div>

      <div id="kickBack" class="excercise-container"> 
        <h3>2 Squats on smith machine</h3>
        <p>Cuadrices y gluteos</p>
        <p><input @click="UpdatekickBack()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="kickback">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="30"> Lbs</p>
                <p>Puede ser con Maquina o barra libre</p>
                <img  src="../assets/chiquis/A-chiquis/smithmachine.gif">
              </div>
          </transition>
      </div>

      <div id="smithMachine" class="excercise-container"> 
        <h3>3 Leg extension</h3>
        <p>Cuadriceps</p>
        <p><input @click="UpdateSmith()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="smith">
                <p>Repeat: 4x12 <input class="weight" type="text"  value="6"> Lbs</p>
                  <p>  </p>
                  <img  src="../assets/chiquis/A-chiquis/leg-extension.gif">
              </div>
          </transition>
      </div>

      <div id="ex-4" class="excercise-container">   
        <h3>4 Hip trust Smith</h3>
        <p>Gluteo 100%</p>
        <p><input @click="excercise4()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_four">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="15"> Lbs</p>
                <img  src="../assets/chiquis/A-chiquis/hiptrust-smith.gif">
              </div>
          </transition>
      </div>
      <div id="ex-5" class="excercise-container"> 
        <h3>5 Press legs horizontal</h3>
        <p>Femoral</p>
        <p><input @click="excercise5()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_five">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="30"> Lbs</p>
                <p>Foot at shoulders level, on the top of the iron</p>
                <img  src="../assets/C/press-legs.gif">  
              </div>
          </transition>
      </div>
      
      <div id="ex-6" class="excercise-container"> 
        <h3>6 Hip abduction</h3>
        <p>Abductores </p>
        <p><input @click="excercise6()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_six">
                <p>Repeat: 4x12 <input class="weight" type="text"  value="20"> Lbs</p>
                  <img  src="../assets/C/hip-abduction.gif">
              </div>
          </transition>
      </div>

      <div id="ex-7" class="excercise-container"> 
        <h3>7 Pantorrilla </h3>
        <p><input @click="excercise7()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_seven">
                <p>Repeat: 4x12 <input class="weight" type="text"  value="90"> Lbs</p>
                  <p>Puede ser en el leg press tambien</p>
                  <img  src="../assets/Alice/A/pant.png">           
              </div>
          </transition>
      </div>
      <div id="ex-8" class="excercise-container"> 
        <h3>8 crunchs Inclinados</h3>
        <p>Espalda y oblicuos</p>
        <p><input @click="excercise8()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="eight">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="0"> Lbs</p>
                <p>Hacer de cada oblicuo</p>
                  <img  src="../assets/C/crunch-oblicuo.gif">   
                  <p>Espalda baja tambien</p>
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



      
      