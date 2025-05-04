<template>
  <div class="flex items-center justify-center p-0.5 bg-gray-700 rounded-lg border border-gray-300">
    <span class="text-sm text-gray-300">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
});
</script>
