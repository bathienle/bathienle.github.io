<template>
  <section id="experience" class="scroll-mt-10">
    <h2 class="text-center text-3xl font-bold p-1.5">Experience</h2>

    <div class="py-4">
      <hr class="w-full border-t-2 border-neutral my-2">
    </div>

    <div v-for="(experience, index) in experiences" :key="experience.company" class="m-2">
      <ExperienceItem :experience="experience" />
      <hr v-if="index < experiences.length - 1" class="border-t border-neutral my-4" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

import ExperienceItem from '@/components/ExperienceItem.vue';

const content = inject<Ref<Content>>('content');
const experiences = computed(() => content?.value?.experiences ?? []);
</script>