import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Cheatsheet from '../views/Cheatsheet.vue'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cheatsheet',
    name: 'Cheatsheet',
    component: Cheatsheet
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
