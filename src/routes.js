import { createRouter, createWebHistory } from 'vue-router';

import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Home from '@/views/Home.vue';
import Project from '@/views/Project.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
