<template>
  <section id="experience" class="scroll-mt-20">
    <h1 class="text-3xl text-gray-300 font-bold p-1.5">Experience</h1>

    <ExperienceItem v-for="experience in experiences" :key="experience.company">
      <template #icon>
        <CodeBracketIcon class="size-6 text-blue-500" />
      </template>
      <template #heading>{{ experience.title }}</template>

      <p class="flex text-gray-500 p-1.5">
        <span class="pr-2">
          <CalendarDaysIcon class="size-6 text-blue-500" />
        </span>
        {{ experience.startDate }} - {{ experience.endDate }}
      </p>

      <p class="flex text-gray-700 p-1.5">
        <span class="pr-2">
          <MapPinIcon class="size-6 text-blue-500" />
        </span>
        {{ experience.company }}
      </p>

      <p class="text-gray-600 p-1.5">
        {{ experience.description }}
      </p>

      <ul class="list-disc text-gray-600 pl-5 p-1.5">
        <li v-for="(item, index) in experience.achievements" :key="index">
          {{ item }}
        </li>
      </ul>

      <div class="flex flex-wrap gap-2 p-1.5">
        <ItemBox v-for="item in experience.technologies" :key="item" :text="item" />
      </div>
    </ExperienceItem>
  </section>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { CalendarDaysIcon, CodeBracketIcon, MapPinIcon } from '@heroicons/vue/24/solid';

import type { Ref } from 'vue';
import type { Content } from '@/types/content';

import ExperienceItem from '@/components/ExperienceItem.vue';
import ItemBox from '@/components/ItemBox.vue';

const content = inject<Ref<Content | null>>('content', ref(null));
const experiences = computed(() => content?.value?.experiences);
</script>