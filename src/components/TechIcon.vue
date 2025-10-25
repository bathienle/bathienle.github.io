<template>
  <div class="max-w-sm shadow-lg bg-dominant/30 p-2 rounded-xl transform transition-transform hover:scale-110 duration-200">
    <a :href="tech.url" target="_blank" rel="noopener" class="relative group">
      <Icon :icon="`logos:${tech.key}`" class="h-12 w-12" />
      <span class="absolute left-1/2 -translate-x-1/2 -top-10 px-2 py-1 rounded bg-dominant text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg">
        {{ tech.name }}
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import type { Tech } from '@/types/content.ts';

defineProps<{
  tech: Tech
}>();
</script>
