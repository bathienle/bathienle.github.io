<template>
  <section id="stack" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">Stack</h1>

    <div class="py-4">
      <hr class="w-full border-t-2 border-white mt-2">
    </div>

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
const stacks = computed(() => content?.value?.stacks);
</script>