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
          <h3>3 smith Machine</h3>
          <p><input @click="UpdateSmith()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="smith">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="5"> Lbs </p>
                    <p> Begginer: Smith Machine</p>
                    <img  src="../assets/chiquis/A-chiquis/smithmachine.gif">
                    <p> Advanced: Free bar</p>
                    <img  src="../assets/chiquis/A-chiquis/squats-freebar.gif">
                  
                </div>
            </transition>
        </div>

        <div id="ex-4" class="excercise-container"> 
          <h3>4 Leg extension</h3>
          <p><input @click="excercise4()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_four">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="30"> Lbs </p>
                    <p> Leg extension machine</p>
                    <img  src="../assets/chiquis/A-chiquis/leg-extension.gif">                  
                </div>
            </transition>
        </div>
        <div id="ex-5" class="excercise-container"> 
          <h3>5 Curl femoral</h3>
          <p><input @click="excercise5()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_five">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="5"> Lbs </p>
                    <p> Curl Femoral machine</p>
                    <img  src="../assets/chiquis/A-chiquis/curl-femoral.gif">                  
                </div>
            </transition>
        </div>
        <div id="ex-6" class="excercise-container"> 
          <h3>6 Squat Hack </h3>
          <p><input @click="excercise6()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_six">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="10"> Lbs </p>
                    <p> Squat Machine stand</p>
                    <img  src="../assets/chiquis/A-chiquis/squat-hack.gif">   
                    <p> Do not extend completely your legs</p>
                    <img  src="../assets/chiquis/A-chiquis/squat-hack-common-errors.gif">                            
                </div>
            </transition>
        </div>

        <div id="ex-7" class="excercise-container"> 
          <h3>7 Full crunch machine </h3>
          <p><input @click="excercise7()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="ex_seven">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="0"> Lbs </p>
                    <p> Full crunch machine </p>
                    <img  src="../assets/chiquis/A-chiquis/fullcrunchmach.gif">   
                    <p>Replaceable for leg raise Abs:</p>
                    <img  src="../assets/chiquis/A-chiquis/raislegsabs.gif">                            
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
  
  