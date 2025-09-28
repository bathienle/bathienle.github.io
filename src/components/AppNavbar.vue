<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-secondary/10 backdrop-blur-md border-b border-white/30">
    <div class="grid grid-cols-2 md:grid-cols-3 items-center h-16 px-4 max-w-7xl mx-auto place-items-center text-neutral">
      <a class="justify-self-start md:justify-self-center text-2xl font-bold hover:text-accent transition-colors duration-200" href="/" rel="noopener">
        {{ fullName }}
      </a>

      <nav class="hidden md:block">
        <ul class="flex flex-row items-center md:items-start">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="px-3 py-2 rounded-md hover:bg-neutral hover:text-dominant duration-200">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="hidden md:flex items-center justify-end gap-2">
        <a
          v-for="social in socials"
          :key="social.key"
          :href="social.url"
          rel="noopener"
          target="_blank"
          class="text-4xl transform transition-transform duration-200 origin-center hover:scale-110 hover:text-accent"
        >
          <Icon :icon="`mdi:${social.key}`" />
        </a>
      </div>

      <button class="md:hidden justify-self-end text-4xl hover:text-dominant" @click="toggleMenu">
        <Icon :icon="isOpen ? 'mdi:times' : 'mdi:menu'" />
      </button>
    </div>

    <nav v-if="isOpen" class="md:hidden bg-dominant shadow-lg">
      <ul class="flex flex-col divide-y divide-white/30">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="block px-3 py-2 hover:bg-secondary hover:text-neutral duration-200"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex justify-center gap-4 py-3 border-t border-gray-700">
        <a
          v-for="social in socials"
          :key="social.key"
          :href="social.url"
          rel="noopener"
          target="_blank"
          class="text-4xl transform transition-transform duration-200 origin-center hover:scale-110 hover:text-accent"
        >
          <Icon :icon="`mdi:${social.key}`" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useNavigation } from '@/composables/useNavigation';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const { links } = useNavigation();
const content = inject<Ref<Content>>('content');
const profile = computed(() => content?.value?.profile);
const socials = computed(() => content?.value?.profile?.socials);
const fullName = computed(() => {
  const first = profile.value?.firstName ?? '';
  const last = profile.value?.lastName ?? '';
  return [first, last.toUpperCase()].filter(Boolean).join(' ');
});

const isOpen = ref(false);
const toggleMenu = () => isOpen.value = !isOpen.value;
const closeMenu = () => isOpen.value = false;
</script>
