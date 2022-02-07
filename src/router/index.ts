import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimulatorView from '../views/SimulatorView.vue'
import ResultView from '../views/ResultView.vue'

import HabitationType from '../components/Simulator_Questions/HabitationType.vue'
import PersonalStatus from "../components/Simulator_Questions/PersonalStatus.vue"
import HomeType from "../components/Simulator_Questions/HomeType.vue"
import HomeLocation from "../components/Simulator_Questions/HomeLocation.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/devis-en-ligne/:id',
      name: 'simulator',
      component: SimulatorView,
      children: [
        {path: '', component: HabitationType},
        {path: 'situation-personnelle', component: PersonalStatus},
        {path: 'utilisation', component: HomeType},
        {path: 'ville', component: HomeLocation}
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
