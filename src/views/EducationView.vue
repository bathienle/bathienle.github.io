<template>
  <section id="education" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">Education</h1>

    <div class="py-4">
      <hr class="w-full border-t-2 border-white mt-2">
    </div>

    <EducationItem
      v-for="education in educations"
      :key="education.degree"
      :icon="AcademicCapIcon"
      :education="education"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { AcademicCapIcon } from '@heroicons/vue/24/solid';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

import EducationItem from '@/components/EducationItem.vue';

const content = inject<Ref<Content>>('content');
const educations = computed(() => content?.value?.educations);
</script>