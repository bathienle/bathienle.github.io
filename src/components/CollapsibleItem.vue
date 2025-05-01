<template>
  <div class="w-full max-w-md mx-auto mt-4 p-2">
    <button 
      @click="isOpen = !isOpen"
      class="flex items-center justify-between px-4 py-2 text-left bg-gray-800 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      <slot name="heading"></slot>

      <span>
        <BarsArrowUpIcon v-if="isOpen" class="size-6" />
        <BarsArrowDownIcon v-else class="size-6" />
      </span>
    </button>

    <div v-show="isOpen" class="p-2 rounded-lg shadow transition-all duration-300">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/vue/24/solid';

const isOpen = ref(false);
</script>