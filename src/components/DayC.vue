<template>
    <div class="container">
    <h1> Day C</h1>
    <p>do Cardio after excercies at least 15 minutes </p>
    <button><router-link to="/">Home</router-link></button>
      <div id="ex-1" class="excercise-container"> 
          <h3>1 Hack squats</h3>
          <p><input @click="excercise1()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_one">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="10"> Lbs </p>
                    <p> Make sure do NOT lock your knees</p>
                    <img  src="../assets/chiquis/A-chiquis/squat-hack.gif">                  
                </div>
            </transition>
      </div>

      <div id="ex-2" class="excercise-container"> 
          <h3>2 Squats on smith machine</h3>
          <p><input @click="excercise2()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_two">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="10"> Lbs </p>
                    <p> Smith machine</p>
                    <img  src="../assets/chiquis/A-chiquis/smithmachine.gif">                  
                </div>
            </transition>
      </div>

      <div id="ex-3" class="excercise-container"> 
          <h3>3 Leg extension</h3>
          <p><input @click="excercise3()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_three">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="30"> Lbs </p>
                    <p> Leg extension</p>
                    <img  src="../assets/chiquis/A-chiquis/leg-extension.gif">                  
                </div>
            </transition>
      </div>

      <div id="ex-4" class="excercise-container"> 
          <h3>4 Hip trust Hack</h3>
          <p><input @click="excercise4()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_four">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="20"> Lbs </p>
                    <p> Hip trust smith machine</p>
                    <img  src="../assets/chiquis/A-chiquis/hiptrust-smith.gif">                  
                </div>
            </transition>
      </div>

      <div id="ex-5" class="excercise-container"> 
          <h3>5 Press legs</h3>
          <p><input @click="excercise5()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_five">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="20"> Lbs </p>
                    <p>feet heigh, don´t lock knees</p>
                    <img  src="../assets/C/press-legs.gif">                  
                </div>
            </transition>
      </div>

      <div id="ex-6" class="excercise-container"> 
          <h3>6 Hip abduction</h3>
          <p><input @click="excercise6()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_six">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="20"> Lbs </p>
                    <p>back straight</p>
                    <img  src="../assets/C/hip-abduction.gif">                  
                </div>
            </transition>
      </div>
      <div id="ex-7" class="excercise-container"> 
          <h3>7 Kick back</h3>
          <p><input @click="excercise7()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_seven">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="10"> Lbs </p>
                    <p>raise your leg as heigh as you can</p>
                    <img  src="../assets/chiquis/A-chiquis/kickback.gif">                  
                </div>
            </transition>
      </div>

 


  </div>
</template>

<script>
 export default {
    data: () => ({
      excersice_1_State: true,
      excersice_2_State: true,
      excersice_3_State: true,
      excersice_4_State: true,
      excersice_5_State: true,
      excersice_6_State: true,
      excersice_7_State: true
    }),
    methods: {
      excercise1(){
        this.excersice_1_State = !this.excersice_1_State;
      },
      excercise2(){
        this.excersice_2_State = !this.excersice_2_State;
      },
      excercise3(){
        this.excersice_3_State = !this.excersice_3_State;
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
        ex_one() {
             return this.excersice_1_State;
        },
        ex_two() {
             return this.excersice_2_State;
        },
        ex_three(){
             return this.excersice_3_State;
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
    }, 

  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* @import '../style/global.css';  */
  @import "../style/routinesDays.css"
 </style>