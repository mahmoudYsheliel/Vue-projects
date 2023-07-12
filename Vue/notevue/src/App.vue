<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

  const show=ref(false);
  const text=ref("");
  const items=reactive([]);
  let index=0;
  
  function addnote(text_in) {
    index++;
    let dat=new Date;
    let r=Math.floor(Math.random()*100+150);
    let g=Math.floor(Math.random()*100+150);
    let b=Math.floor(Math.random()*100+150);
    let a=Math.random()*0.5;
    let item={
      id:index.toString(),
      text:text_in,
      date:dat.toLocaleTimeString(),
      color:"rgba(" + r.toString() + "," + g.toString() + "," + b.toString() + "," + a.toString() +")"
    };
   items.push(item) 
  }
</script>
   
<template>
  <main>
    
    <div  v-if="show" id="input">
      <div id="c">
        <textarea  v-model="text"  name="" id="" cols="30" rows="10"></textarea>
        <button  class="tex" @click="addnote(text);show=false;text=''" >add</button>
        <button v-on:click="show=false;text=''" class="tex">close</button>
      </div>
    </div>
    <div id="container">
      <h1>note</h1>
      <button v-on:click="show=true">+</button>
    </div>
    <div  id="notes">
      <div  v-for="item in items" :style="{backgroundColor: item.color}" :background-color="item.color" class="note" :id="item.id">
        <div class="t">{{ item.text }}</div> 
        <div class="t">{{ item.date }}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
main{
  width: 100vw;
  height: 100vh;
}

#container{
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  text-transform: uppercase;
  font-size: 30px;
  color: cornflowerblue;
  background-color: darkred;
  border-radius: 40px;
  padding: 20px;
}
button{
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: chocolate;
  font-size: 40px;
  color: rgb(194, 222, 222);
  transition-duration: 1s;
}
button:hover{
  background-color: rgb(194, 222, 222);
  color: chocolate;
  cursor: pointer;
}
#notes{
  margin: 25px auto;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}

.note{
  background-color: aqua;
  width: 200px;
  height: 200px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
}
.t{
  padding: 20px;
}
#input{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#c{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
textarea{
  width: 460px;
  padding: 20px;
  resize: none;
}
.tex{
  width: 500px;
  height: 40px;
  border-radius: 30px;
  margin: 10px;
  font-size: 30px;
  text-transform: capitalize;
}
</style>
