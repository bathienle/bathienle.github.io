<template>
  <div class="relative pt-2 pb-4 pl-20">
    <div
      class="flex items-center justify-center w-8 h-8
            lg:absolute lg:left-[5%] lg:w-[50px] lg:h-[50px]
            lg:bg-gray-500 lg:rounded-lg"
    >
      <img :src="experience.icon" :alt="experience.company" />
    </div>

    <div class="w-full flex-1 mt-2 ml-4 pl-15">
      <div class="flex items-center justify-between cursor-pointer select-none" @click="toggle">
        <div>
          <h3 class="text-xl mb-1 text-[color:var(--color-heading)]">
            {{ experience.title }}
          </h3>
          <span class="flex text-gray-500 p-1.5">
            <span class="pr-2 text-3xl">
              <Icon icon="mdi:calendar-clock-outline"/>
            </span>
            {{ experience.startDate }} - {{ experience.endDate }}
          </span>
        </div>
        <button
          class="ml-2 focus:outline-none"
          :aria-label="collapsed ? 'Expand details' : 'Collapse details'"
          tabindex="-1"
          type="button"
        >
          <svg
            :class="['transition-transform duration-200', collapsed ? 'rotate-0' : 'rotate-180']"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      <transition name="fade">
        <div v-show="!collapsed">
          <p class="flex text-gray-500 p-1.5">
            <span class="pr-2 text-3xl">
              <Icon icon="mdi:location" />
            </span>
            {{ experience.location }}
          </p>

          <p class="flex text-gray-500 p-1.5">
            <span class="pr-2 text-3xl">
              <Icon icon="mdi-office-building"/>
            </span>
            {{ experience.company }}
          </p>

          <p class="text-justify text-gray-600 p-1.5">
            {{ experience.description }}
          </p>

          <ul class="list-disc text-gray-600 pl-7.5 p-1.5">
            <li v-for="(item, index) in experience.achievements" :key="index">
              {{ item }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-4 pt-4">
            <TechIcon v-for="tech in experience.stack" :key="tech.key" :tech="tech" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import type { Experience } from '@/types/content.ts';

import TechIcon from '@/components/TechIcon.vue';

defineProps<{
  experience: Experience,
}>();

const collapsed = ref(true);

const toggle = () => {
  collapsed.value = !collapsed.value;
};
</script>
