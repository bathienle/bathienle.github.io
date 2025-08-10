<template>
  <footer class="py-2 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="grid grid-cols-1 md:grid-cols-3 my-10 max-w-4xl mx-auto place-items-center items-start">
      <div class="m-2">
        <h2 class="text-2xl text-gray-300 font-bold py-1.5">
          Ba Thien Le
        </h2>

        <p>Crafted with precision and a touch of mischievous code.</p>

        <div class="flex my-4 gap-5">
          <a
            v-for="social in profile?.socials"
            class="text-3xl hover:text-gray-300 transition-colors duration-200 rounded-full hover:scale-110 transition-transform duration-200"
            :key="social.key"
            :href="social.url"
            rel="noopener"
            target="_blank"
          >
            <Icon :icon="`fa:${social.key}`"/>
          </a>
        </div>
      </div>

      <div class="m-2">
        <h2 class="text-2xl text-gray-300 font-bold py-1.5">Navigation</h2>

        <nav class="flex flex-col">
          <a href="#about" class="py-2 hover:text-gray-300 duration-200">About</a>
          <a href="#experience" class="py-2 hover:text-gray-300 duration-200">Experience</a>
          <a href="#education" class="py-2 hover:text-gray-300 duration-200">Education</a>
          <a href="#project" class="py-2 hover:text-gray-300 duration-200">Projects</a>
        </nav>
      </div>

      <div class="m-2">
        <h2 class="text-2xl text-gray-300 font-bold py-1.5">Projects</h2>

        <div class="flex flex-col">
          <a
            class="py-2 hover:text-gray-300 duration-200" v-for="(project, index) in projects"
            :key="index"
            :href="project.link"
            target="_blank"
            rel="noopener"
          >
            {{ project.title }}
          </a>
        </div>
      </div>

    </div>

    <div class="border-t border-white/10 my-6 w-3/4 mx-auto" />

    <p class="flex justify-center my-10">&copy; {{ new Date().getFullYear() }} {{ fullName }}. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const content = inject<Ref<Content>>('content');
const projects = computed(() => content?.value?.projects);
const profile = computed(() => content?.value?.profile);
const fullName = computed(() => {
  const first = profile.value?.firstName ?? '';
  const last = profile.value?.lastName ?? '';
  return [first, last].filter(Boolean).join(' ');
});
</script>