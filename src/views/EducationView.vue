<template>
  <section id="education" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">Education</h1>

    <div class="py-4">
      <hr class="w-full border-t-2 border-white mt-2">
    </div>

    <EducationItem v-for="education in educations" :key="education.degree">
      <template #icon>
        <AcademicCapIcon class="size-8 text-blue-500" />
      </template>
      <template #heading>{{ education.degree }}</template>

      <p class="flex text-gray-500 p-1.5">
        <span class="pr-2">
          <CalendarDaysIcon class="size-6 text-blue-500" />
        </span>
        {{ education.startDate }} - {{ education.endDate }}
      </p>

      <p class="flex text-gray-700 p-1.5">
        <span class="pr-2">
          <MapPinIcon class="size-6 text-blue-500" />
        </span>
        {{ education.location }}
      </p>

      <p class="flex text-gray-700 p-1.5">
        <span class="pr-2">
          <BuildingLibraryIcon class="size-6 text-blue-500" />
        </span>
        {{ education.institution }}
      </p>

      <p class="text-gray-600 p-1.5">
        {{ education.description }}
      </p>

      <div class="flex flex-wrap gap-2 p-1.5">
        <TagItem v-for="item in education.tags" :key="item" :text="item" />
      </div>
    </EducationItem>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { AcademicCapIcon, BuildingLibraryIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/vue/24/solid';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.d.ts';

import EducationItem from '@/components/EducationItem.vue';
import TagItem from '@/components/TagItem.vue';

const content = inject<Ref<Content>>('content');
const educations = computed(() => content?.value?.educations);
</script>