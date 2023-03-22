<template>
    <div id="aliceRoutines" class="container-alice">
     <div class="info-profile">
        <h1>Alice's routines</h1>
        <p><strong>Remember:</strong> <br> *Warm up before trainning <br> *Start with low weights</p>
     </div>
        <div class="days">
          <button class="a"><router-link to="/DayA">Day A</router-link></button>
          <button class="b"><router-link to="/DayB">Day B</router-link></button>
          <button class="c"><router-link to="/DayC">Day C</router-link></button>
        </div>
          <button class="rectangle"><router-link to="/">Home</router-link></button>
      </div>
    
    </template>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style>
      @import '../style/global.css'; 
      @import "../style/routinesDays.css"
    </style>
    
    