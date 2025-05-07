<template>
  <header class="sticky top-0 z-50 bg-black text-white shadow-md">
    <div class="mx-auto flex items-center justify-between p-4">
      <div v-if="profile" class="text-xl font-bold">
        <a class="hover:text-blue-500" :href="profile.website" rel="noopener">
          {{ profile.firstName }} <span class="uppercase">{{ profile.lastName }}</span>
        </a>
      </div>

      <nav class="flex">
        <a href="#about" class="p-2 hover:bg-blue-500 rounded-full">About</a>
        <a href="#experience" class="p-2 hover:bg-blue-500 rounded-full">Experience</a>
        <a href="#education" class="p-2 hover:bg-blue-500 rounded-full">Education</a>
        <a href="#project" class="p-2 hover:bg-blue-500 rounded-full">Projects</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

const content = inject<Ref<Content>>('content');
const profile = computed(() => content?.value?.profile);
</script>