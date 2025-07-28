<template>
  <header class="sticky top-0 z-50 bg-black text-white shadow-md">
    <div class="flex items-center justify-center">
      <div class="mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-3 items-center h-16">

          <div v-if="profile" class="text-xl font-bold justify-start">
            <a class="hover:text-blue-500 transition-colors duration-200" :href="profile.website" rel="noopener">
              {{ profile.firstName }} <span class="uppercase">{{ profile.lastName }}</span>
            </a>
          </div>

          <nav class="flex items-center justify-center">
            <a href="#about" class="px-3 py-2 rounded-md hover:bg-blue-500 duration-200">About</a>
            <a href="#experience" class="px-3 py-2 rounded-md hover:bg-blue-500 duration-200">Experience</a>
            <a href="#education" class="px-3 py-2 rounded-md hover:bg-blue-500 duration-200">Education</a>
            <a href="#project" class="px-3 py-2 rounded-md hover:bg-blue-500 duration-200">Projects</a>
          </nav>

          <div class="flex items-center justify-end gap-2">
            <a
              v-for="social in socials"
              :key="social.key"
              :href="social.url"
              rel="noopener"
              target="_blank"
              class="hover:text-blue-500 transition-colors duration-200"
            >
              <Icon class="text-2xl" :icon="`fa:${social.key}`" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const content = inject<Ref<Content>>('content');
const profile = computed(() => content?.value?.profile);
const socials = computed(() => content?.value?.profile?.socials);
</script>