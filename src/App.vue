<template>
  <AppNavbar />

  <main id="main" class="p-8 md:p-8">
    <AboutView />
    <ExperienceView />
    <EducationView />
    <ProjectView />
  </main>

  <AppFooter />
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';

import type { Content } from '@/types/content.d.ts';

import AppFooter from './components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import AboutView from '@/views/AboutView.vue';
import EducationView from '@/views/EducationView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import ProjectView from '@/views/ProjectView.vue';

const content = ref<Content>();
provide('content', content);

onMounted(async () => {
  const response = await fetch('/content.json');
  content.value = await response.json();
});
</script>
