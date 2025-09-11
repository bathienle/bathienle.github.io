<template>
  <div
    class="p-2 rounded-lg hover:bg-secondary"
    :class="{ 'bg-secondary': isOpen }"
    @click="isOpen = !isOpen"
  >
    <div class="flex flex-col md:flex-row items-center">
      <div class="flex-none flex justify-center items-center w-20 mb-3 md:mb-0">
        <div class="flex justify-center items-center w-16 h-16 rounded-lg bg-neutral">
          <img :src="experience.icon" :alt="experience.company" />
        </div>
      </div>

      <div class="flex-1 flex justify-center items-center mb-3 md:mb-0">
        <h3 class="text-3xl text-center">{{ experience.title }}</h3>
      </div>

      <div class="flex-none flex flex-col items-end gap-y-2 md:pr-2">
        <div class="text-2xl font-bold">{{ experience.company }}</div>
        <time>{{ experience.startDate }} - {{ experience.endDate }}</time>
      </div>
    </div>

    <div v-show="isOpen" class="p-2">
      <p class="flex-none flex items-center justify-center md:justify-end">
        <span class="pr-2 text-3xl">
          <Icon icon="mdi:location" />
        </span>
        {{ experience.location }}
      </p>

      <p class="text-justify p-1.5">
        {{ experience.description }}
      </p>

      <div class="flex flex-wrap justify-center gap-4 pt-8">
        <TechIcon v-for="tech in experience.stack" :key="tech.key" :tech="tech" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import TechIcon from '@/components/TechIcon.vue';

import type { Experience } from '@/types/content.ts';

defineProps<{
  experience: Experience,
}>();

const isOpen = ref(false);
</script>
