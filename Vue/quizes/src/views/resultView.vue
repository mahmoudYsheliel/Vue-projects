<script setup>
    import { useRoute ,useRouter} from 'vue-router';
    const count=useRoute().params.count;
    const total=useRoute().params.total;


    const router=useRouter();
    const gohome=()=>{
        router.push("/");
    }
</script>

<template>
    <main>
        <div class="cont">
            <h1> your score is</h1>
            <h1> <span>{{count}}</span> <span> / </span> <span>{{ total }}</span></h1>
            <button @click="gohome">home</button>
        </div>
    </main>

</template>

<style scoped>
main{
    background-color: rgb(12, 5, 48);
}
.cont{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: uppercase;
    padding: 100px;
    color: rgb(10, 10, 185);
}
button{
    background-color: rgb(116, 110, 123);
    width: 100px;
    height: 50px;
    font-size: larger;
    text-transform: uppercase;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 3px rgb(217, 170, 82);
    text-shadow: 1px 1px rgb(33, 23, 50);
    transition-duration: 0.5s;
}
button:hover{
    background-color:rgb(147, 144, 151) ;
    cursor: pointer;
}
button:active{
    box-shadow: 2px 2px 2px 0px wheat;
}


</style>