<template>
<div id="chiquisRoutines" class="container-chiquis">
  <h1>Chiquis's routines</h1>
  <p><strong>Remember:</strong> <br> *Warm up before trainning <br> *Start with low weights</p>
    <div class="days">
      <button class="a"><router-link to="/ChiquisA">Day A</router-link></button>
      <button class="b"><router-link to="/ChiquisB">Day B</router-link></button>
      <button class="c"><router-link to="/ChiquisC">Day C</router-link></button>
    </div>
      <button class="rectangle"><router-link to="/">Home</router-link></button>
  </div>

</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../style/global.css'; 
  @import "../style/routinesDays.css"
</style>


