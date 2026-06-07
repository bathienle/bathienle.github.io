<template>
  <div class="flex flex-col items-center text-center gap-2 p-4 bg-secondary rounded-2xl border border-neutral hover:bg-secondary/80 transition-colors min-h-36">
    <Icon :icon="topic.icon" width="36" height="36" class="text-primary shrink-0" />
    <p class="font-bold leading-tight">{{ topic.title }}</p>
    <p class="text-sm text-muted-foreground leading-tight line-clamp-2">{{ topic.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Topic } from '@/types/content';
import { Icon } from '@iconify/vue';

defineProps<{ topic: Topic }>();
</script>
