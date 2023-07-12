<script lang="ts" setup>
    import { ref } from 'vue';
    const emit=defineEmits(['errorm'])
    const prop=defineProps(['result']);
    const  vtem=ref(prop.result.tem);
    const  vhum=ref(prop.result.hum);
    const  vsun=ref(prop.result.sun);
    const  vcon=ref(prop.result.ded);
    const  error =ref(!prop.result.show);

    emit('errorm',error);
    const data=ref();
    
    const showdata=async()=>{
        
        try {
            const response:any= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${prop.result.city}?unitGroup=us&key=DFKY4ACZ3FD9RPAT5N6QN6QQZ`);
            const jfile= await response.json();
            data.value= jfile.days[prop.result.date];
        }catch(error){}
    }
    showdata()
    

   

  
</script>



<template>
    <div>
        <div class="resultcontainer" v-if="!error"> 

        <div class="hour" v-if="vtem || vcon || vhum">
            <div class="show"> at this hour</div>
            <div  class="tem group">
                <div  v-if="vtem"> tempreture: {{ data.hours[prop.result.hour].temp }}</div>
                <div  v-if="vtem"> feelslike: {{ data.hours[prop.result.hour].feelslike }}</div>
                <div  v-if="vhum"> humidity: {{ data.hours[prop.result.hour].humidity }}</div>
                <div v-if="vcon"> condition: {{ data.hours[prop.result.hour].conditions }}</div>
            </div>
        </div>

        <div class="day">
            <div class="show"> at this day</div>

            <div class="vtempreature" v-if="vtem">
                <div class="group">
                    <div> tempreatue </div>
                    <div>min {{ data.tempmin }}</div>
                    <div>max {{ data.tempmax }}</div>
                    <div>avr {{ data.temp }}</div>
                </div>
                <div class="group">
                    <div> feels like </div>
                    <div>min {{ data.feelslikemin }}</div>
                    <div>max{{ data.feelslikemax }}</div>
                    <div>avr {{ data.feelslike }}</div>
                </div>
            </div>
            <div v-if="vsun" class="group">
                <div>sunrise: {{ data.sunrise }}</div>
                <div>sunset: {{ data.sunset }}</div>
            </div>
            <div class="vhumidity group" v-if="vhum">
                <div> humidity {{ data.humidity }}</div>
            </div>

            <div v-if="vcon"> description: {{ data.description }}</div>
        </div>
        </div>
    </div>
</template>

<style scoped>

*{
    font-size: small;
    text-transform: capitalize;
}
div{
    text-align: center;
}
.resultcontainer{
    max-height: 150px;
    overflow: auto;
    background-color: aqua;
    margin: 10px;
    border-radius: 10px;
}

.group{
    display: flex;
    justify-content: space-around;
    padding: 1px;
}
.show{
    font-size: larger;
    color: rgb(188, 118, 118);
    text-transform: uppercase;
}


</style>