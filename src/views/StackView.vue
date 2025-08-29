<template>
  <section id="stack" class="scroll-mt-10">
    <h2 class="text-center text-3xl text-neutral font-bold p-1.5">My Tech Stack</h2>

    <div class="py-4">
      <hr class="w-full border-t-2 border-neutral my-2">
    </div>

    <div class="grid md:grid-cols-2 gap-6 p-1.5">
      <div 
        v-for="(stack, index) in stacks"
        :key="index"
        class="bg-secondary rounded-xl shadow-md p-4 border border-neutral"
      >
        <h3 class="text-center text-xl font-semibold pb-4">{{ stack.title }}</h3>
        <div class="flex flex-wrap justify-center gap-4 mx-15">
          <TechIcon v-for="tech in stack.items" :key="tech.key" :tech="tech" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

import TechIcon from '@/components/TechIcon.vue';

const content = inject<Ref<Content>>('content');
const stacks = computed(() => content?.value?.stacks);
</script>