<script setup lang="ts">
  import { ref } from 'vue';
  import sideBar from "../src/components/sideBar.vue"
  import { RouterView } from 'vue-router';

  class searchClass{
    constructor(
      public city:string,
      public hour:number,
      public date:number,
      public tem:boolean,
      public hum:boolean,
      public sun:boolean,
      public ded:boolean,
      public show:boolean
    ){}
  } 
  
  

 
</script>

<template>
  <main>
    <sideBar />
    <RouterView/>
  </main>
</template>


<style scoped>

*{
  margin: 0;
  padding: 0;
  color: rgb(84, 7, 45);
}
main{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg,rgb(158, 118, 15),blue);
}






</style>
