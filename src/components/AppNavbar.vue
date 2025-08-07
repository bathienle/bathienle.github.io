<template>
  <header class="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
    <div class="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto md:hidden">
      <div v-if="profile" class="text-xl font-bold">
        <a class="hover:text-blue-500 transition-colors duration-200" :href="profile.website" rel="noopener">
          {{ profile.firstName }} <span class="uppercase">{{ profile.lastName }}</span>
        </a>
      </div>

      <button @click="toggleMenu" class="focus:outline-none" aria-label="Toggle menu">
        <Icon v-if="!isOpen" class="text-2xl" icon="fa7-solid:bars"/>
        <Icon v-else class="text-2xl" icon="fa7-solid:xmark" />
      </button>
    </div>

    <nav v-if="isOpen" class="md:hidden bg-gray-800">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a href="#about" @click="closeMenu" class="block px-3 py-2 rounded-md hover:bg-blue-500 duration-200">
          About
        </a>
        <a href="#experience" @click="closeMenu" class="block px-3 py-2 rounded-md hover:bg-blue-500 duration-200">
          Experience
        </a>
        <a href="#education" @click="closeMenu" class="block px-3 py-2 rounded-md hover:bg-blue-500 duration-200">
          Education
        </a>
        <a href="#project" @click="closeMenu" class="block px-3 py-2 rounded-md hover:bg-blue-500 duration-200">
          Projects
        </a>
      </div>

      <div class="flex px-4 pb-3 space-x-4">
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
    </nav>

    <div class="hidden md:grid md:grid-cols-3 md:items-center md:h-16 mx-auto max-w-5xl px-4">
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
  </header>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { Icon } from '@iconify/vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const content = inject<Ref<Content>>('content');
const profile = computed(() => content?.value?.profile);
const socials = computed(() => content?.value?.profile?.socials);

const isOpen = ref(false);
const toggleMenu = () => isOpen.value = !isOpen.value;
const closeMenu = () => isOpen.value = false;
</script>
