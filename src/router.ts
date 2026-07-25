import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProjectDetailView from '@/views/ProjectDetailView.vue';

declare module 'vue-router' {
  interface RouteMeta {
    bare?: boolean;
  }
}

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projects/:slug', name: 'project', component: ProjectDetailView },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { bare: true } },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }

    return savedPosition ?? { top: 0 };
  },
});
