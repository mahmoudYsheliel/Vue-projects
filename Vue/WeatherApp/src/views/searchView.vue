<script lang="ts" setup>
    import { ref } from 'vue';
    import resultComponent from '@/components/resultComponent.vue';
    import searchComponet from '@/components/searchComponenet.vue';

   
    const error=ref(false);
    const send:any=ref([]);
    const last=ref();



</script>

<template>

    <searchComponet   @serchobject="(e)=>{send.push(e);last=e}"/>
    <div class="container" >
        <div v-if="error" class="error-m">error, please enter proper data</div>

        <resultComponent @errorm="(e: boolean)=>{error=e}" v-for="s in send" :result="s" />
    </div>
        
   

    
</template>

<style scoped>
.container{
    width: 500px;
    margin: 40px auto;
    background-color: rgb(0, 255, 85);
    border-radius: 20px;
    padding: 10px;
    height: 400px;
    overflow:auto;

}
.error-m{
    color: red;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
}

</style>
