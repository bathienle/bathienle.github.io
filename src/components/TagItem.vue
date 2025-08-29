<template>
  <div class="flex items-center justify-center p-1 bg-gray-600 rounded-lg">
    <span class="text-sm">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string,
}>();
</script>
