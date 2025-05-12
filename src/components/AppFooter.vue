<template>
  <section class="py-2">
    <hr class="w-full border-t-2 border-gray-500 mt-2">

    <div class="flex justify-center p-4 gap-2">
      <a v-for="social in socials" :key="social.key" :href="social.url" rel="noopener" target="_blank">
        <div class="p-2 border border-gray-300 rounded-lg shadow-md">
          <div class="text-4xl text-gray-500 hover:text-blue-500 transition-colors duration-200">
            <i :class="`fab fa-${social.key}`" />
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

const content = inject<Ref<Content>>('content');
const socials = computed(() => content?.value?.profile?.socials);
</script>