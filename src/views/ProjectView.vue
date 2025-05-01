<template>
  <h1 id="project" class="text-3xl text-gray-300 font-bold p-1.5">Projects</h1>

  <CollapsibleItem v-for="(project, index) in projects" :key="index">
    <template #heading>
      <h2 class="flex text-xl text-gray-200 font-semibold">
        <a :href="project.link" class="flex items-center gap-1" target="_blank" rel="noopener">
          <span class="flex-nonepr-1">{{ project.title }}</span>
          <ArrowTopRightOnSquareIcon class="size-6" />
        </a>
      </h2>
    </template>
    <p class="flex text-gray-400">
      <CalendarDaysIcon class="size-6 pr-2" />
      {{ project.startDate }} - {{ project.endDate }}
    </p>

    <div class="text-gray-300">
      <p>{{ project.description }}</p>

      <div class="flex flex-wrap gap-2 p-1.5">
        <ItemBox v-for="item in project.technologies" :key="item" :text="item" />
      </div>
    </div>
  </CollapsibleItem>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { ArrowTopRightOnSquareIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';

import type { Ref } from 'vue';
import type { Content } from '@/types/content';

import CollapsibleItem from '@/components/CollapsibleItem.vue';
import ItemBox from '@/components/ItemBox.vue';

const content = inject<Ref<Content | null>>('content', ref(null));
const projects = computed(() => content?.value?.projects);
</script>