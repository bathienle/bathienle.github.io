<template>
  <section class="py-2">
    <hr class="w-full border-t-2 border-gray-500 mt-2">

    <div class="flex justify-center p-4 gap-2">
      <a v-for="social in profile?.socials" :key="social.key" :href="social.url" rel="noopener" target="_blank">
        <div class="flex border border-gray-300 rounded-lg shadow-md w-16 h-16 items-center justify-center">
          <div class="text-4xl text-gray-500 hover:text-blue-500 transition-colors duration-200">
            <Icon :icon="`fa:${social.key}`" />
          </div>
        </div>
      </a>
    </div>

    <p class="flex justify-center">&copy; {{ new Date().getFullYear() }} {{ fullName }}. All rights reserved.</p>
  </section>
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
  return [first, last].filter(Boolean).join(' ');
});
</script>