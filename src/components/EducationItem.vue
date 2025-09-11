<template>
  <div class="p-2 rounded-lg bg-secondary">
    <div class="flex flex-col md:flex-row items-center">
      <div class="flex-none flex justify-center items-center w-20 mb-3 md:mb-0">
        <div class="flex justify-center items-center w-16 h-16 bg-neutral rounded-lg">
          <img :src="education.icon" :alt="education.institution" />
        </div>
      </div>

      <div class="flex-1 flex justify-center items-center mb-3 md:mb-0">
        <h3 class="text-xl md:text-3xl text-center">{{ education.degree }}</h3>
      </div>

      <div class="flex-none flex flex-col items-center md:items-end gap-y-2 md:pr-2">
        <div class="text-lg md:text-2xl font-bold text-center md:text-right">{{ education.institution }}</div>
        <time class="text-sm md:text-base">{{ education.startDate }} - {{ education.endDate }}</time>
      </div>
    </div>

    <div class="p-2">
      <p class="flex items-center justify-center md:justify-end">
        <span class="pr-2 text-3xl">
          <Icon icon="mdi:location" />
        </span>
        {{ education.location }}
      </p>

      <div class="flex flex-wrap justify-center gap-4 pt-4">
        <TagItem v-for="item in education.tags" :key="item" :text="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import TagItem from '@/components/TagItem.vue';
import type { Education } from '@/types/content.ts';

defineProps<{
  education: Education,
}>();
</script>
