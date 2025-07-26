<template>
  <AppNavbar />

  <main>
    <AboutView />
    <StackView />
    <ExperienceView />
    <EducationView />
    <ProjectView />
  </main>

  <AppFooter />
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';

import type { Content } from '@/types/content.d.ts';

import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import AboutView from '@/views/AboutView.vue';
import EducationView from '@/views/EducationView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import ProjectView from '@/views/ProjectView.vue';
import StackView from '@/views/StackView.vue';

const content = ref<Content>();
provide('content', content);

onMounted(async () => {
  const response = await fetch('/content.json');
  content.value = await response.json();
});
</script>
