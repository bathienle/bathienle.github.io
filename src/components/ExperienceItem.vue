<template>
  <div class="item">
    <div
      class="flex items-center justify-center w-8 h-8
            lg:absolute lg:left-[5%] lg:w-[50px] lg:h-[50px]
            lg:bg-gray-500 lg:rounded-lg"
    >
      <img :src="experience.icon" :alt="experience.company" />
    </div>

    <div class="details w-full">
      <div class="flex items-center justify-between cursor-pointer select-none" @click="toggle">
        <div>
          <h3 class="text-xl mb-1 text-[color:var(--color-heading)]">
            {{ experience.title }}
          </h3>
          <span class="flex text-gray-500 p-1.5">
            <span class="pr-2">
              <CalendarDaysIcon class="size-6 text-blue-500" />
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
          <p class="flex text-gray-700 p-1.5">
            <span class="pr-2">
              <MapPinIcon class="size-6 text-blue-500" />
            </span>
            {{ experience.location }}
          </p>

          <p class="flex text-gray-700 p-1.5">
            <span class="pr-2">
              <BuildingLibraryIcon class="size-6 text-blue-500" />
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

          <div class="flex flex-wrap gap-2 p-1.5">
            <TagItem v-for="item in experience.tags" :key="item" :text="item" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BuildingLibraryIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/vue/24/solid';

import type { Experience } from '@/types/content.d.ts';

import TagItem from '@/components/TagItem.vue';

defineProps<{
  experience: Experience,
}>();

const collapsed = ref(true);

function toggle() {
  collapsed.value = !collapsed.value;
}
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  margin-top: 0.5rem;
  padding-left: 50px;
  flex: 1;
  margin-left: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}
</style>