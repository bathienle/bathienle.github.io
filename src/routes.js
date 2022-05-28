import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Experience from '@/views/Experience.vue';
import Skill from '@/views/Skill.vue';
import Project from '@/views/Project.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
