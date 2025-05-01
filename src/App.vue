<template>
  <AppNavbar />

  <main>
    <ExperienceView />
    <EducationView />
    <ProjectView />
  </main>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';

import type { Content } from '@/types/content';

import AppNavbar from '@/components/AppNavbar.vue';
import EducationView from '@/views/EducationView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import ProjectView from '@/views/ProjectView.vue';

const content = ref<Content | null>(null);
provide('content', content);

onMounted(async () => {
  const response = await fetch('/content.json');
  content.value = await response.json();
});
</script>
