<template>
  <div id="chiquisA" class="excercises-page">
    <h1> Day A</h1>
    <p> title</p>
    <button class="rectangle"><router-link to="/chiquisbonita">Back</router-link></button>
   
      <div id="hip-trust" class="excercise-container"> 
        <h3>Cristos invertidos</h3>
        <p><input @click="UpdatehipTrust()" class="checkBox" type="radio"  value="10" > Done </p>
          <transition name="fade">
              <div v-if="hipTrust">
                  <p>Repeat: 4x15 <input class="weight" type="text"  value="10"> Lbs</p>
                  <p> Extension </p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">
              </div>
          </transition>
      </div>


    <p> Press bar chest</p>
      <div id="kickBack" class="excercise-container"> 
        <h3>Peck fly</h3>
        <p><input @click="UpdatekickBack()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="kickback">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="10"> Lbs</p>
                  <p> Extension </p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">
                
              </div>
          </transition>
      </div>

      <div id="smithMachine" class="excercise-container"> 
        <h3>hammer with dumbells</h3>
        <p><input @click="UpdateSmith()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="smith">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="10"> Lbs</p>
                  <p> Extension </p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">
                
              </div>
          </transition>
      </div>

      <div id="ex-4" class="excercise-container"> 
        <h3>Pull over hight</h3>
        <p><input @click="excercise4()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_four">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="10"> Lbs</p>
                  <p> Extension </p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">
              </div>
          </transition>
      </div>
      <div id="ex-5" class="excercise-container"> 
        <h3>Raise bar biceps</h3>
        <p><input @click="excercise5()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_five">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="10"> Lbs</p>
                  <p> Extension </p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">  
              </div>
          </transition>
      </div>
      <div id="ex-6" class="excercise-container"> 
        <h3>pull rope triceps</h3>
        <p><input @click="excercise6()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_six">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="10"> Lbs</p>
                  <p> Extension </p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">
              </div>
          </transition>
      </div>

      <div id="ex-7" class="excercise-container"> 
        <h3>7 excercise </h3>
        <p><input @click="excercise7()" class="checkBox" type="radio" > Done </p>
          <transition name="fade">
              <div v-if="ex_seven">
                <p>Repeat: 4x15 <input class="weight" type="text"  value="10"> Lbs</p>
                  <p> Extension </p>
                  <img  src="../assets/Alice/A/peckflyinvertido.webp">                  
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



      
     
