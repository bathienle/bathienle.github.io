<template>
  <div class="max-w-sm shadow-lg bg-gray-600 p-2 rounded-xl">
    <div class="h-12 w-12">
      <a :href="tech.url" target="_blank" rel="noopener" class="relative group">
        <img class="object-contain w-full h-full" :alt="tech.name" :src="getImageSrc()" />
        <span class="absolute left-1/2 -translate-x-1/2 -top-10 px-2 py-1 rounded bg-gray-700 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
          {{ tech.name }}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tech } from '@/types/content.d.ts';

const props = defineProps<{
  tech: Tech,
}>();

const getImageSrc = () => `/images/tech-stack-icons/${props.tech.key}.svg`;
</script>
