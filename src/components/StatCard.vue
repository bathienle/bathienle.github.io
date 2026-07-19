<template>
  <div class="flex items-center gap-3 bg-secondary rounded-2xl px-4 py-5 transition-colors hover:bg-secondary/80">
    <div v-if="stat.icon" class="shrink-0">
      <Icon :icon="stat.icon" width="24" height="24" />
    </div>
    <div class="flex flex-col">
      <p class="text-3xl font-bold text-neutral leading-none">{{ stat.value }}</p>
      <p class="text-xs uppercase tracking-widest mt-1">{{ stat.label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Stat } from '@/types/content';

defineProps<{ stat: Stat }>();
</script>
