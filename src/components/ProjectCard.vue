<template>
  <div class="max-w-sm w-full rounded-2xl overflow-hidden shadow-lg bg-black">
    <div class="h-48 w-full overflow-hidden">
      <img class="object-contain w-full h-full" :src="project.image" :alt="project.title" />
    </div>

    <div class="bg-gray-700 p-4">
      <h3 class="flex text-2xl font-bold text-gray-500 mb-2 justify-between items-center">
        <span class="text-gray-500 hover:text-blue-500 transition-colors duration-200">
          {{ project.title }}
        </span>
        <span>
          <a :href="project.link" target="_blank" rel="noopener">
            <i class="fab fa-github fa-lg text-gray-500 hover:text-blue-500 transition-colors duration-200" />
          </a>
        </span>
      </h3>

      <h4 class="pb-4">
        <i class="fa-solid fa-calendar-days" /> {{ project.startDate }} - {{ project.endDate }}
      </h4>

      <p class="text-gray-200 text-sm text-justify">{{ project.description }}</p>

      <div class="flex flex-wrap gap-2 pt-2">
        <TagItem v-for="tag in project.tags" :key="tag" :text="tag" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/content.d.ts';

import TagItem from '@/components/TagItem.vue';

defineProps<{
  project: Project,
}>();
</script>