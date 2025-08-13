<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
    <div class="w-full h-screen flex items-center justify-center relative overflow-hidden pt-20">

      <div class="relative z-10 text-center max-w-4xl px-6">
        <div class="mb-8">
          <h1
            class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            {{ fullName }}
          </h1>
          <p class="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            {{ profile?.tagline }}
          </p>
        </div>

        <a
          href="#project"
          class="inline-block bg-purple-900 hover:text-gray-400 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
          See My Work
        </a>
      </div>

      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" @click="scrollDown">
        <Icon icon="mdi:arrow-down-circle" class="w-10 h-10 text-white/70" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const content = inject<Ref<Content>>('content');
const profile = computed(() => content?.value?.profile);
const fullName = computed(() => {
  const first = profile.value?.firstName ?? '';
  const last = profile.value?.lastName ?? '';
  return [first, last.toUpperCase()].filter(Boolean).join(' ');
});

const scrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}
</script>
