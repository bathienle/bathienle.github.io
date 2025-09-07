<template>
  <section id="project" class="scroll-mt-10">
    <h2 class="text-center text-3xl font-bold p-1.5">Projects</h2>

    <div class="py-4">
      <hr class="w-full border-t-2 border-neutral pb-2 my-2">
    </div>

    <div class="flex flex-col items-center gap-10">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

import ProjectCard from '@/components/ProjectCard.vue';

const content = inject<Ref<Content>>('content');
const projects = computed(() => content?.value?.projects);
</script>