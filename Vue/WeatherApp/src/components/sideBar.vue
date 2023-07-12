
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const isActive =ref(false);
  const router=useRouter();
  const gotosearch=()=>{
    router.push("/search");
  }
  const gotooverview=()=>{
    router.push("/overview");
  }

    
</script>

<template>
    <div :class="{ notactive: isActive }" class="side-bar">
    <div @click="isActive = !isActive" class="togle" :class="{ activetogle: isActive }">
      <span ></span>
      <span ></span>
    </div>
    <div id="search" @click="gotosearch">search</div>
    <div id="overview"  @click="gotooverview"> overview </div>
  </div>
</template>


<style scoped>

.side-bar{
  position: absolute;
  left: 0px;
  top: 10%;
  width: 100px;
  height:80%;
  background: linear-gradient(30deg,red,orange);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 22px;
  text-transform: capitalize;
  align-items: center;
  border-radius: 20px;
  transition-duration: 0.5s;
}
.side-bar div:hover{
  cursor: pointer;
}
#search,#overview{
  overflow: hidden;
  width: 100%;
}
.notactive{
  width:0px;
}

.togle{
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: brown;
  left: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.togle span{
  display: block;
  width: 25px;
  height: 5px;
  background-color: aliceblue;
  border-radius: 5px;
  transition-duration: 0.5s;
}
.togle span:first-child{
  position: absolute;
  transform: rotateZ(45deg) translateY(10px);
}
.togle span:last-child{
  position: absolute;
  transform: rotateZ(-45deg) translateY(-10px);
}
.activetogle span:first-child{
  position: absolute;
  transform: rotateZ(-45deg) translateY(10px);
}
.activetogle span:last-child{
  position: absolute;
  transform: rotateZ(45deg) translateY(-10px);
}
</style>