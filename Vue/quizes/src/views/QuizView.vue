<script setup>
    import {useRoute,useRouter} from "vue-router"
    import quizes from "../data/quizes.json"
    import { ref,computed } from "vue";
    import questionComponenet from"../components/quizComponent.vue"


    const route =useRoute();
    const correcCount=ref(0);
    const questionCount=ref(0);
    const router=useRouter();
    console.log()
    const quize=computed(()=>quizes.find(q=>(q.id==route.params.id)).questions[questionCount.value])
    const answered=function(isCorrect){
        if(isCorrect){correcCount.value++};
        
        if(questionCount.value==(quizes[route.params.id-1].questions.length-1)) {
            let test=`${correcCount.value}`+"/"+`${quizes[route.params.id-1].questions.length}`;
            router.push(`/result/${test}`);
        }
        else {questionCount.value++;}
        

    }
</script>

<template>
    <main >
        <header>
            <h1>question {{ quize.id }}</h1>
            <div class="par">
                <div  :style="{width: ((quize.id-1)/3*100).toString() +`%`}" ></div>
            </div>
        </header>
        <questionComponenet :ques="quize" @optionselected="answered"  />
    </main>

    
</template>
    
    

<style scoped>
header{
    margin: 25px auto;
    width: 80%;
    text-transform: capitalize;
}
.par{
    width: 300px;
    height: 20px;
    border: 5px blanchedalmond solid;
}
.par div{
    background-color: blanchedalmond;
    height: 100%;
    transition-duration: 1s;
}



</style>