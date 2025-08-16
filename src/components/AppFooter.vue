<template>
  <footer class="py-2 bg-gradient-to-b from-gray-800 to-gray-700">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 max-w-4xl mx-auto place-items-center items-start">
      <div class="m-2 text-center md:text-left">
        <h2 class="text-2xl text-gray-300 font-bold py-1.5">
          {{ fullName }}
        </h2>

        <p class="text-gray-400 text-balance leading-relaxed">Crafted with precision and a touch of mischievous code.</p>

        <ul class="flex my-4 gap-5 justify-center md:justify-start">
          <li v-for="social in profile?.socials" :key="social.key">
            <a
              class="inline-flex items-center justify-center text-4xl transform transition-transform duration-200 origin-center hover:scale-110 hover:text-gray-200"
              :aria-label="`Visit ${social.key} profile`"
              :href="social.url"
              rel="noopener"
              target="_blank"
            >
              <Icon :icon="`mdi:${social.key}`"/>
            </a>
          </li>
        </ul>
      </div>

      <nav class="m-2">
        <h2 class="text-center md:text-left text-2xl text-gray-300 font-bold py-1.5">Navigation</h2>

        <ul class="flex flex-col items-center md:items-start">
          <li v-for="link in links" :key="link.href" class="py-2">
            <a class="text-gray-400 hover:text-gray-200 transition-colors duration-200" :href="link.href">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="m-2">
        <h2 class="text-center md:text-left text-2xl text-gray-300 font-bold py-1.5">Projects</h2>

        <ul class="flex flex-col items-center md:items-start">
          <li v-for="(project, index) in projects" :key="index" class="py-2">
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="text-gray-400 hover:text-gray-200 transition-colors duration-200"
            >
              {{ project.title }}
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="border-t border-white/10 my-6 w-3/4 mx-auto" />

    <p class="flex justify-center my-10">&copy; {{ currentYear }} {{ fullName }}. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#project', label: 'Projects' },
];

const currentYear = new Date().getFullYear();
const content = inject<Ref<Content>>('content');
const projects = computed(() => content?.value?.projects);
const profile = computed(() => content?.value?.profile);
const fullName = computed(() => {
  const first = profile.value?.firstName ?? '';
  const last = profile.value?.lastName ?? '';
  return [first, last].filter(Boolean).join(' ');
});
</script>