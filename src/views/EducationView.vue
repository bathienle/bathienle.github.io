<template>
  <section id="education" class="scroll-mt-10">
    <h2 class="text-center text-3xl text-gray-300 font-bold p-1.5">Education</h2>

    <div class="py-4">
      <hr class="w-full border-t-2 border-white my-2">
    </div>

    <div v-for="(education, index) in educations" :key="education.degree" class="m-2">
      <EducationItem :education="education" />
      <hr v-if="index < educations.length - 1" class="border-t border-gray-600 my-4" />
    </div>

  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

import EducationItem from '@/components/EducationItem.vue';

const content = inject<Ref<Content>>('content');
const educations = computed(() => content?.value?.educations ?? []);
</script>