<template>
  <section id="about" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">About</h1>

    <p v-if="about" class="text-justify p-1.5">
      {{ about.description }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

const content = inject<Ref<Content>>('content');
const about = computed(() => content?.value?.about);
</script>