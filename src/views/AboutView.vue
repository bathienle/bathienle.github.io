<template>
  <section id="about" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">About</h1>

    <p v-if="about" class="text-justify p-1.5">
      {{ about.description }}
    </p>

    <h2 class="text-2xl text-gray-500 text-center font-bold p-1.5">Skills</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <TechIcon v-for="tech in stacks" :key="tech.key" :tech="tech" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

import TechIcon from '@/components/TechIcon.vue';

const content = inject<Ref<Content>>('content');
const about = computed(() => content?.value?.about);
const stacks = computed(() => content?.value?.stacks);
</script>