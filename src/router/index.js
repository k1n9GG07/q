import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import WorkDetailView from '../views/WorkDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView
    },
    {
      path: '/works/:id',
      name: 'work-detail',
      component: WorkDetailView,
      props: true
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
