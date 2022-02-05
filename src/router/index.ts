import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimulatorView from '../views/SimulatorView.vue'
import ResultView from '../views/ResultView.vue'

import HabitationType from '../components/Simulator_Questions/HabitationType.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/devis-en-ligne',
      name: 'simulator',
      component: SimulatorView,
      children: [
        {path: '', component: HabitationType}
      ]
    },
    {
      path: '/resultats',
      name: 'result',
      component: ResultView
    },
  ]
})

export default router
