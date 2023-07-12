<script lang="ts" setup>
    import { ref } from 'vue';

    const emit = defineEmits(['serchobject']);


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
    let today=new Date();


    const city_bind= ref("cairo");
    const hour_bind= ref("8");
    const date_bind= ref(today.toLocaleDateString());
    const tem_bind= ref(true);
    const hum_bind= ref(true);
    const sun_bind= ref(true);
    const des_bind= ref(true);


    //hours for options
    let hours:any[]=[];
    for(let i=0;i<24;i++){
        hours.push(i);
    }
    //days for options
    let rangeOfDays=15;
    let days:any[]=[];
    for(let i=0;i<rangeOfDays;i++){
        days.push(today.toLocaleDateString());
        today.setDate(today.getDate()+1);
    }


    const creatobject=async()=>{
      
      
    let d1 = new Date();
    let d2 = new Date(date_bind.value)
    let day=Math.ceil((d2.getTime()-d1.getTime())/(1000*60*60*24));


   
    let obj= new searchClass(
    city_bind.value,
    Number(hour_bind.value),
    day,
    tem_bind.value,
    hum_bind.value,
    sun_bind.value,
    des_bind.value,
    true); 

  try {const response:any= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city_bind.value}?unitGroup=us&key=DFKY4ACZ3FD9RPAT5N6QN6QQZ`);
      const data= await response.json();
  }catch(error){obj.show=false;}
  
    emit('serchobject',obj);

      
  }

</script>


<template>

<div id="search-menu">
      <div>
        <label for="city">city</label>
        <input v-model="city_bind" type="text" name="city" id="cit">
      </div>
      <div>
        <label for="hours">hours</label>
        <select v-model="hour_bind" name="hours" id="hours">
          <option v-for="h in hours" :value="h">{{h}}</option>
        </select>
      </div>
      
      <div>
        <label for="days">days</label>
        <select v-model="date_bind"  name="days" id="days">
          <option v-for="d in days" :value="d">{{d}}</option>
        </select>
      </div>
      <div>
        <input v-model="tem_bind" type="checkbox" id="tem" name="tem" value="tem">
        <label for="tem"> temprature</label>
      </div>
      <div>
        <input v-model="hum_bind" type="checkbox" id="humidity" name="humidity" value="humidity">
        <label for="humidity"> humidity</label>
      </div>
      <div>
        <input v-model="sun_bind" type="checkbox" id="sun" name="sun" value="sun">
        <label for="sun"> sun</label>
      </div>
      <div>
        <input v-model="des_bind" type="checkbox" id="description" name="description" value="description">
        <label for="description"> description</label>
      </div>
      <div id="erorr"></div>
      <button id="search-button" @click="creatobject"> search</button>
    </div>

   
</template>


<style scoped>

#search-menu{
  margin: auto;
  transform: translate(0,20px);
  width: 250px;
  height: 230px;
  background:linear-gradient(30deg,aqua,darkgrey);
  border-radius: 15px;
}
input{
  margin: 5px;
  border-radius: 5px;
}
label{
  margin: 10px;
  color:brown;
  text-transform:capitalize;
}
button{
  position: absolute;;
  display: block;
  width: 80px;
  height: 30px;
  margin: auto;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: capitalize;
  font-size: larger;
}

</style>