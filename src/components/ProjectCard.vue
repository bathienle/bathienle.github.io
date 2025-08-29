<template>
  <div class="max-w-sm w-full rounded-2xl overflow-hidden shadow-lg bg-secondary border border-neutral">
    <div class="h-48 w-full overflow-hidden bg-black">
      <img class="object-contain w-full h-full" :src="project.image" :alt="project.title" />
    </div>

    <div class="p-4">
      <h3 class="flex text-2xl font-bold mb-2 justify-between items-center">
        <span class="text-accent">
          {{ project.title }}
        </span>
        <span>
          <a
            class="text-3xl hover:text-accent transition-colors duration-200"
            :href="project.link"
            target="_blank"
            rel="noopener"
          >
            <Icon icon="mdi:github"/>
          </a>
        </span>
      </h3>

      <h4 class="flex items-center pb-4 gap-2">
        <Icon class="text-3xl" icon="mdi:calendar-clock-outline"/>
        {{ project.startDate }} - {{ project.endDate }}
      </h4>

      <p class="text-sm text-justify">{{ project.description }}</p>

      <div class="flex flex-wrap gap-2 pt-2">
        <TagItem v-for="tag in project.tags" :key="tag" :text="tag" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import type { Project } from '@/types/content.ts';

import TagItem from '@/components/TagItem.vue';

defineProps<{
  project: Project,
}>();
</script>