<template>
  <div class="flex gap-3 p-4 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors">
    <div class="shrink-0">
      <Icon :icon="topic.icon" width="48" height="48" class="text-primary" />
    </div>
    <div class="flex flex-col gap-1">
      <p class="font-semibold text-lg">{{ topic.title }}</p>
      <p class="text-sm text-muted-foreground">{{ topic.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Topic } from '@/types/content';
import { Icon } from '@iconify/vue';

defineProps<{ topic: Topic }>();
</script>
