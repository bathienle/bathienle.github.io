<template>
  <div class="p-1 bg-gray-700 rounded-lg border border-gray-300">
    <span class="text-sm text-gray-200">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
});
</script>
