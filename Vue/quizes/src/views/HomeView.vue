<script setup>
    import quizes from "../data/quizes.json"
    import { ref,watch } from "vue";
    import { useRouter } from "vue-router";


    const search =ref("");
    const router=useRouter();
    const quize =ref(quizes);
    watch(search,()=>{
        quize.value=quizes.filter(q=>q.name.toLowerCase().includes(search.value.toLowerCase()));
    })
    
    function showquiz(id){
        return router.push(`/quiz/${id}`);
    }


</script>

<template>
    
    <div class="HomeContainer">
        
        <div class="contain">
            <div class="search">
                <h1>searsh</h1>
                <textarea v-model="search" name="searsharea" id="searsharea" ></textarea>
            </div>
                <div  class="quizcon">
                    <div @click="showquiz(q.id)" v-for="q in quize" class="quizcard ">
                        <img :src="q.img" alt="">
                        <h3>{{ q.name }}</h3>
                        <p>{{ q.questions.length }} questions</p>
                    </div>
                </div>
        </div>
        
    </div>
</template>


<style scoped>

.HomeContainer{
    width: 100%;
    height: 100%;
    background-color: rgb(189, 170, 170);
    display: flex;
    justify-content: center;
    align-items: center;
}
.contain{
    width: 80%;
    min-height: 600px;
    background-color: aqua;
    border-radius: 20px;
}
.search{
    text-transform: uppercase;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
}
textarea{
    margin: 0px  ;
    width: 40%;
    border-radius: 15px;
    resize: none;
    padding: 5px 15px ;
}
.quizcon{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.quizcard{
    margin: 50px;
    height: 200px;
    width: 200px;
    background-color: aliceblue;
    border-radius: 20px;
    border-top-left-radius: 80px;
    border-bottom-right-radius: 80px;
    overflow: hidden;
    transition-duration: 1s;
    

}
.quizcard:hover{
    cursor: pointer;
    scale: 1.1;
    filter:saturate(8);
}
img{
    width: 100%;
    height: 60%;
}
h3,p{
    margin: 0;
    padding: 10px;
}

</style>