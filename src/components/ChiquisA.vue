<template>
    <div id="chiquisA" class="excercises-page">
      <h1> Day A</h1>
      <p>Back - chess - abs</p>
      <button class="rectangle"><router-link to="/chiquisbonita">Back</router-link></button>
     
        <div id="ex1" class="excercise-container"> 
          <h3>1 Jalon agarre supino</h3>
          <p><input @click="ex1()" class="checkBox" type="radio"  value="10" > Done </p>
            <transition name="fade">
                <div v-if="this.ex1_st">
                    <p>Repeat: 4x10<input class="weight" type="text"  value="10"> Lbs</p>
                    <p> Extension </p>
                    <img  src="../assets/B/jalon-supino2.gif">
                </div>
            </transition>
        </div>

        <div id="ex2" class="excercise-container"> 
          <h3>2 Dominada OR Jalon abierto</h3>
          <p><input @click="ex2()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="this.ex2_st">
                    <p>Repeat: 4x10 <input class="weight" type="text"  value="low"> Lbs </p>
                    <p> Option 1 - Jalon abierto sentado</p>
                    <img  src="../assets/B/jalon-abierto.gif">
                    <p> Option 2 - Dominada agarre abierto:</p>
                    <img  src="../assets/B/dominada.gif">
                  
                </div>
            </transition>
        </div>
        <div id="ex-8" class="excercise-container"> 
          <h3>8 remo al menton</h3>
          <p><input @click="ex8()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="this.ex8_st">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="0"> Lbs </p>
                    <p>lift fast - down slowly</p>
                    <img  src="../assets/B/remoalmentonbarra.gif">                      
                </div>
            </transition>
        </div>
        <div id="ex3" class="excercise-container"> 
          <h3>3 Chest Press</h3>
          <p><input @click="ex3()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="this.ex3_st">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="5"> Lbs </p>
                    <p>chest press CORRECT WAY of seating</p>
                    <img  src="../assets/B/chesspress-neutro.gif">
                    <p>correct elbows position</p>
                    <img  src="../assets/B/chesspress-neutral2.gif">
                  
                </div>
            </transition>
        </div>

        <div id="ex-4" class="excercise-container"> 
          <h3>4 Peck fly</h3>
          <p><input @click="ex4()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="this.ex4_st">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="30"> Lbs </p>
                    <p> Peck fly</p>
                    <img  src="../assets/B/peckflyok.gif">                  
                </div>
            </transition>
        </div>
        <div id="ex-5" class="excercise-container"> 
          <h3>5 twist torso machine</h3>
          <p><input @click="ex5()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="this.ex5_st">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="5"> Lbs </p>
                    <p> lift fast - down slowly</p>
                    <img  src="../assets/B/twist-torso.gif">                  
                </div>
            </transition>
        </div>
        <div id="ex-6" class="excercise-container"> 
          <h3>6 Crunchs machine</h3>
          <p><input @click="ex6()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="this.ex6_st">
                    <p>Repeat: 4x10 <input class="weight" type="text" value="10"> Lbs </p>
                    <p>increase 5lbs every serie</p>
                    <img  src="../assets/B/crunch-maquina.gif">                            
                </div>
            </transition>
        </div>

        <div id="ex-7" class="excercise-container"> 
          <h3>7 hanging leg raises </h3>
          <p><input @click="ex7()" class="checkBox" type="radio" > Done </p>
            <transition name="fade">
                <div v-if="this.ex7_st">
                    <p>Repeat: 4x12 <input class="weight" type="text" value="0"> Lbs </p>
                    <p>lift fast - down slowly</p>
                    <img  src="../assets/B/hanging-leg-raises.gif">                      
                </div>
            </transition>
        </div>

    </div>
  </template>
  
  
  <script>
  export default {
    data: () => ({
      ex1_st: true,
      ex2_st:true,
      ex3_st:true,
      ex4_st: true,
      ex5_st: true,
      ex6_st: true,
      ex7_st: true,
      ex8_st: true,
    }),
    methods: {
      ex1() {
        this.ex1_st = !this.ex1_st;
      },
      ex2() {
        this.ex2_st = !this.ex2_st;
      },
      ex3() {
        this.ex3_st = !this.ex3_st;
      },
      ex4(){
        this.ex4_st = !this.ex4_st;
      },
      ex5(){
        this.ex5_st =  !this.ex5_st;
      },
      ex6(){
        this.ex6_st =  !this.ex6_st;
      },
      ex7(){
        this.ex7_st =  !this.ex7_st;
      },
      ex8(){
        this.ex8_st =  !this.ex8_st;
      }
    },
  };

  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    @import "../style/excercises.css";
    @import "../style/global.css";
   </style>
  
  