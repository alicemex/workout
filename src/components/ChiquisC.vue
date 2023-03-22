<template>
  <div id="chiquisC" class="excercises-page">
    <h1> Day C</h1>
    <p>Biceps - Triceps - Dorsales - Abs</p>
    <button class="rectangle"><router-link to="/chiquisbonita">Back</router-link></button>
      <div id="hip-trust" class="excercise-container"> 
        <h3>1 Biceps barra Recta</h3>
        <p><input @click="UpdatehipTrust()" class="checkBox" type="radio"  value="10" > Done </p>
          <transition name="fade">
              <div v-if="hipTrust">
                  <p>Repeat: 4x12 <input class="weight" type="text"  value="30"> Lbs</p>
                  <p> Do not raise your elbows </p>
                  <img  src="../assets/C/biceps-barra-recta.gif">
              </div>
          </transition>
      </div>

      <div id="kickBack" class="excercise-container"> 
        <h3>2 Triceps fondos asistidos</h3>
        <p><input @click="UpdatekickBack()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="kickback">
                  <p>Repeat: 4x10 <input class="weight" type="text"  value="50"> Lbs </p>
                  <p> Option 1 - Push down seated on machine:</p>
                  <img  src="../assets/C/fondos-maquina.gif">
                  <p> Option 2 - asisted triceps push down:</p>
                  <p> go up fast and go down slowly </p>
                  <img  src="../assets/C/fondos-asistidos.jpg">
                
              </div>
          </transition>
      </div>

      <div id="smithMachine" class="excercise-container"> 
        <h3>3 Oblicuos - crunchs inclinados </h3>
        <p><input @click="UpdateSmith()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="smith">
                  <p>Repeat: 4x10 <input class="weight" type="text" value="30"> Lbs </p>
                  <p>para tener la Cintura definida</p>
                  <img  src="../assets/C/crunch-oblicuo.gif">
                  <p>Advanced: hold a 5lbs weight item in your arms </p>

                
              </div>
          </transition>
      </div>

      <div id="ex-4" class="excercise-container"> 
        <h3>4 Biceps Hammer dumbells</h3>
        <p><input @click="excercise4()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_four">
                  <p>Repeat: 4x12 <input class="weight" type="text" value="5"> Lbs </p>
                  <p> do not raise your elbows, keem them still</p>
                  <img  src="../assets/C/martillos-dumbell.gif">  
                  <p> faster way </p>
                  <img  src="../assets/C/martillos2x1.gif">                         
              </div>
          </transition>
      </div>
      <div id="ex-5" class="excercise-container"> 
        <h3>5 Ticeps - pull down rope</h3>
        <p><input @click="excercise5()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_five">
                  <p>Repeat: 4x12 or 4x10 <input class="weight" type="text" value="10"> Lbs </p>
                  <p> try to add 5 more lbs in the last set</p>
                  <img  src="../assets/C/triceps-rope.gif"> 
                  <p> Example 2</p>
                  <img  src="../assets/C/triceps-example.gif">                  
              </div>
          </transition>
      </div>
      <div id="ex-6" class="excercise-container"> 
        <h3>6 ABS with a ball - Oblicuos </h3>
        <p><input @click="excercise6()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_six">
                  <p>Repeat: 3x15 <input class="weight" type="text" value="1"> Lbs </p>
                  <p> Try making as muchs repeats as you can</p>
                  <img  src="../assets/C/oblicuos-ball.gif">   
                  <p> Replace with this if too hard: </p>
                  <img  src="../assets/C/cintura-oblicuos.gif">   
                  <p> Oblicuos muscle</p>
                  <img  src="../assets/C/oblicuos-muscle.png">                           
              </div>
          </transition>
      </div>

      <div id="ex-7" class="excercise-container"> 
        <h3>7 Shoulders -remo al menton polea </h3>
        <p><input @click="excercise7()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_seven">
                  <p>Repeat: 4x12 <input class="weight" type="text" value="0"> Lbs </p>
                  <p> Try to keep your back straight - Raise your elbows above your ears </p>
                  <img  src="../assets/C/remo.gif">           
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
  @import "../style/excercises.css";
  @import "../style/global.css";
 </style>

