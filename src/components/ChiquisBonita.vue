<template>

 <div class="container-chiquis">
   <div class="bckgrnd">
    <button><router-link to="/ChiquisA">Day A</router-link></button>
    <button><router-link to="/ChiquisB">Day B</router-link></button>
    <button><router-link to="/ChiquisC">Day C</router-link></button>
    <button><router-link to="/">Home</router-link></button>
   </div>
 </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../style/global.css'; 
  @import "../style/chiquis.css"
 </style>