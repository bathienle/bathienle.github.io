<template>
  <section id="stack" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">Stack</h1>

    <div class="py-4">
      <hr class="w-full border-t-2 border-white mt-2">
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div 
        v-for="(stack, index) in stacks"
        :key="index"
        class="bg-gray-800 rounded-xl shadow-md p-4 border border-gray-700"
      >
        <h3 class="text-center text-xl text-gray-100 font-semibold pb-4">{{ stack.title }}</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <TechIcon v-for="tech in stack.items" :key="tech.key" :tech="tech" />
        </div>
      </div>
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