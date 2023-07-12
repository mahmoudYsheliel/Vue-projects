import { createRouter, createWebHistory } from 'vue-router'
import searchView from "../views/searchView.vue"
import overviewView from "../views/overviewView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/search',
      name: 'search',
      component: searchView
    },
    {
      path: '/overview',
      name: 'overvie',
      component:overviewView
    }
  ]
})

export default router
