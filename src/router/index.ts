import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/',
        component:()=>import('@/views/SkillView.vue')
    }
  ]
})

export default router
