<script setup>
    import { defineProps } from 'vue';
    import { defineEmits } from 'vue';

    const question = defineProps(["ques"]);
    const emits =defineEmits(['optionselected'])

    
</script>


<template>
    <div class="containerq">
        <div class="question">
            <div class="qtext"> {{ question.ques.text }}</div>
        <div  @click="emits('optionselected',o.isCorrect)" v-for="o in question.ques.options" class="option">
            <div class="label">{{ o.label }}</div>
            <div class="text">{{ o.text }}</div>
        </div>
    </div>
    </div>
</template>

<style scoped>
.containerq{
    margin: 25px auto;
    width: 80%;
}
.question{
    padding: 20px;
    font-size: 25px;
}
.qtext{
    padding: 10px;
}
.option{
    display: flex;
    width: 600px;
    background-color: bisque;
    margin-top: 40px;
    transition-duration: 1s;
    align-items: center;;
}
.label{
    margin-right: 10px;
    background-color: brown;
    color: aliceblue;
    padding: 5px;
}
.option:hover{
    background-color: cadetblue;
    scale: 1.05;
    cursor: pointer;
}
</style>