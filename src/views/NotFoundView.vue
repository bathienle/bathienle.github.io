<template>
  <div class="min-h-screen relative overflow-hidden bg-dominant">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(43,127,255,0.10) 0%, transparent 65%);"
    />

    <div class="w-full min-h-screen flex items-center justify-center relative z-10 px-6">
      <div class="text-center max-w-3xl">

        <h1 class="text-8xl md:text-9xl font-bold tracking-tight leading-none mb-4">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">404</span>
        </h1>

        <p class="text-sm md:text-base tracking-[0.3em] uppercase text-neutral/35 font-medium mb-5">
          Page Not Found
        </p>

        <div class="w-12 h-px bg-accent/30 mx-auto mb-8" />

        <p class="text-lg md:text-xl text-neutral/55 max-w-xl mx-auto leading-relaxed mb-10">
          This page does not exist, or it moved somewhere else. Let's get you back on track.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-xl text-base font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            <Icon icon="mdi:arrow-left" class="w-4 h-4" />
            Back to Home
          </RouterLink>
          <RouterLink
            to="/#project"
            class="inline-flex items-center gap-2 border border-white/10 text-neutral/60 px-7 py-3.5 rounded-xl text-base font-medium transition-all duration-300 hover:border-white/20 hover:text-neutral hover:bg-white/5 hover:-translate-y-0.5"
          >
            View Projects
          </RouterLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
