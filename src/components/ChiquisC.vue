<template>
    <div class="container">
      <h1> Day A</h1>
      <button><router-link to="/">Home</router-link></button>
        <div class="excercise-tittle"> 
          <p> Fondos asistidos</p>
          <span>4x12  <input type="checkbox" id="excercice-one" name="excercice-one" value="excercice-one"></span>
        </div>
        <div class="excercise-one excercise"></div>
  
        <div class="excercise-tittle"> 
          <p> Cristos invertidos</p>
          <span>4x15  <input type="checkbox" id="excercice-two" name="excercice-two" value="excercice-two"></span>
        </div>
        <div class="excercise-two excercise"></div>
  
        <div class="excercise-tittle"> 
          <p> Peck fly</p>
          <span>4x10  <input type="checkbox" id="excercice-three" name="excercice-three" value="excercice-three"></span>
        </div>
        <div class="excercise-three excercise"></div>
  
        
        <div class="excercise-tittle"> 
          <p> hammer with dumbells</p>
          <span>4x10  <input type="checkbox" id="excercice-three" name="excercice-three" value="excercice-three"></span>
        </div>
        <div class="excercise-four excercise"></div>
  
        
        <div class="excercise-tittle"> 
          <p> Pull over hight</p>
          <span>4x12  <input type="checkbox" id="excercice-three" name="excercice-three" value="excercice-three"></span>
        </div>
        <div class="excercise-five excercise"></div>
        
        <div class="excercise-tittle"> 
          <p> Raise bar biceps</p>
          <span>4x10  <input type="checkbox" id="excercice-three" name="excercice-three" value="excercice-three"></span>
        </div>
        <div class="excercise-six excercise"></div>
  
        
        <div class="excercise-tittle"> 
          <p> pull rope triceps</p>
          <span>4x12  <input type="checkbox" id="excercice-three" name="excercice-three" value="excercice-three"></span>
        </div>
        <div class="excercise-seven excercise"></div>
  
        
        <div class="excercise-tittle"> 
          <p> Press bar chest</p>
          <span>4x8  <input type="checkbox" id="excercice-eight" name="excercice-eight" value="excercice-eight"></span>
        </div>
        <div class="excercise-eight excercise"></div>
  
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'DayX',
    props: {
      msg: String
    }
  }
  
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    @import '../style/global.css'; 
    @import "../style/dayA.css"
   </style>
  
  