<template>
  <section id="experience" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">Experience</h1>

    <div class="py-4">
      <hr class="w-full border-t-2 border-white mt-2">
    </div>

    <ExperienceItem
      v-for="experience in experiences"
      :key="experience.company"
      :item="experience"
      :icon="CodeBracketIcon"
      :locationIcon="MapPinIcon"
      :institutionIcon="BuildingLibraryIcon"
      :dateIcon="CalendarDaysIcon"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { BuildingLibraryIcon, CalendarDaysIcon, CodeBracketIcon, MapPinIcon } from '@heroicons/vue/24/solid';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

import ExperienceItem from '@/components/ExperienceItem.vue';

const content = inject<Ref<Content>>('content');
const experiences = computed(() => content?.value?.experiences);
</script>