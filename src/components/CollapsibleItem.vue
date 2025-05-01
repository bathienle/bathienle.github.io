<template>
  <div class="w-full max-w-md mx-auto mt-4 p-2">
    <button 
      @click="isOpen = !isOpen"
      class="w-full px-4 py-2 text-left bg-gray-800 text-white rounded-lg shadow hover:bg-blue-700 transition">
      <slot name="heading"></slot>
    </button>

    <div v-show="isOpen" class="p-2 rounded-lg shadow transition-all duration-300">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>