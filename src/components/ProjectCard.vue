<template>
  <div class="max-w-4xl w-full rounded-3xl overflow-hidden shadow-lg bg-secondary border border-neutral">
    <div class="grid grid-cols-2 items-center gap-4 p-6">
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl">{{ project.title }}</h3>

          <div class="flex items-center pb-4 gap-2">
            <Icon class="text-2xl" icon="mdi:calendar-clock-outline" />
            {{ project.startDate }} - {{ project.endDate }}
          </div>
        </div>

        <p>{{ project.description }}</p>

        <div class="flex flex-wrap gap-3">
          <TechIcon
            v-for="tech in project.stack"
            :key="tech.key"
            :tech="tech"
            class="transform hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <div class="w-full overflow-hidden rounded-2xl border border-neutral">
          <img class="object-contain w-full h-full" :src="project.image" :alt="project.title" />
        </div>

        <div class="flex justify-end gap-3">
          <a
            class="flex items-center gap-2 p-2 bg-dominant rounded-2xl hover:text-accent"
            :href="project.repository"
            target="_blank"
            rel="noopener"
          >
            <Icon class="text-xl" icon="mdi:github" />
            <span>View Code</span>
          </a>
          <a
            class="flex items-center gap-2 p-2 bg-accent rounded-2xl hover:text-dominant"
            :href="project.link"
            target="_blank"
            rel="noopener"
          >
            <Icon class="text-xl" icon="mdi:external-link" />
            <span>Life Demo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import TechIcon from '@/components/TechIcon.vue';
import type { Project } from '@/types/content.ts';

defineProps<{
  project: Project,
}>();
</script>