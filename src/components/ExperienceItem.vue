<template>
  <div class="flex items-center">
    <div class="flex-none flex justify-center items-center w-20">
      <div class="flex justify-center items-center w-16 h-16 bg-gray-600 rounded-lg">
        <img :src="experience.icon" :alt="experience.company" />
      </div>
    </div>

    <div class="flex-1 flex justify-center items-center mx-4">
      <h3 class="text-3xl text-center">{{ experience.title }}</h3>
    </div>

    <div class="flex-none flex flex-col items-end gap-y-2">
      <div class="text-2xl font-bold">{{ experience.company }}</div>
      <time>{{ experience.startDate }} - {{ experience.endDate }}</time>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import type { Experience } from '@/types/content.ts';

import TechIcon from '@/components/TechIcon.vue';

defineProps<{
  experience: Experience,
}>();

const collapsed = ref(true);

const toggle = () => {
  collapsed.value = !collapsed.value;
};
</script>
