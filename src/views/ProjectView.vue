<template>
  <section id="project" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5 pb-4">Projects</h1>

    <div class="flex flex-wrap gap-4 ">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

import ProjectCard from '@/components/ProjectCard.vue';

const content = inject<Ref<Content>>('content');
const projects = computed(() => content?.value?.projects);
</script>