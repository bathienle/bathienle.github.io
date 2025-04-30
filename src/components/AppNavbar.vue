<template>
  <header class="sticky top-0 z-50 bg-black text-white shadow-md">
    <div class="mx-auto flex items-center justify-between p-4">
      <div v-if="profile" class="text-xl font-bold">
        {{ profile.firstName }} {{ profile.lastName }}
      </div>

      <nav class="flex">
        <a href="#home" class="p-2 hover:bg-green-700 rounded-full">Home</a>
        <a href="#about" class="p-2 hover:bg-green-700 rounded-full">About</a>
        <a href="#education" class="p-2 hover:bg-green-700 rounded-full">Education</a>
        <a href="#experiences" class="p-2 hover:bg-green-700 rounded-full">Experiences</a>
        <a href="#projects" class="p-2 hover:bg-green-700 rounded-full">Projects</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content';

const content = inject<Ref<Content | null>>('content', ref(null));
const profile = computed(() => content?.value?.profile);
</script>