import { createWebHistory,createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue"
import QuizView from '../views/QuizView.vue'
import resultView from "../views/resultView.vue"


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:"home",
            component:HomeView
        },
        {
            path:'/quiz/:id',
            name:"quiz",
            component:QuizView
        },
        {
            path:'/result/:count/:total',
            name:"result",
            component:resultView
        }
    ]
})


export default router

