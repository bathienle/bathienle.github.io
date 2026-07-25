<template>
  <div class="min-h-screen relative overflow-hidden bg-dominant">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(43,127,255,0.10) 0%, transparent 65%);"
    />

    <div class="w-full h-screen flex items-center justify-center relative z-10 pt-16 px-6">
      <div class="text-center max-w-3xl">

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-4">
          <span class="text-neutral mr-4">{{ firstName }}</span><span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">{{ lastName }}</span>
        </h1>

        <p class="text-sm md:text-base tracking-[0.3em] uppercase text-neutral/35 font-medium mb-5">
          Software Engineer
        </p>

        <div class="w-12 h-px bg-accent/30 mx-auto mb-8" />

        <p class="text-lg md:text-xl text-neutral/55 max-w-xl mx-auto leading-relaxed mb-10">
          {{ profile?.tagline }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="#project"
            class="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-xl text-base font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            View Projects
            <Icon icon="mdi:arrow-right" class="w-4 h-4" />
          </a>
          <a
            href="#about"
            class="inline-flex items-center gap-2 border border-white/10 text-neutral/60 px-7 py-3.5 rounded-xl text-base font-medium transition-all duration-300 hover:border-white/20 hover:text-neutral hover:bg-white/5 hover:-translate-y-0.5"
          >
            About Me
          </a>
        </div>

      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-neutral/25 hover:text-neutral/50 transition-colors duration-300"
      @click="scrollDown"
    >
      <span class="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
      <div class="w-px h-5 bg-current" />
      <Icon icon="mdi:chevron-down" class="w-3.5 h-3.5 animate-bounce" />
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
const firstName = computed(() => profile.value?.firstName ?? '');
const lastName = computed(() => profile.value?.lastName?.toUpperCase() ?? '');

const scrollDown = () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
};
</script>
