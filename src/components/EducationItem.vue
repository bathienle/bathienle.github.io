<template>
  <div class="item">
    <i>
      <img :src="education.icon" :alt="education.institution" />
    </i>

    <div class="details w-full">
      <div class="flex items-center justify-between cursor-pointer select-none" @click="toggle">
        <div>
          <h3>{{ education.degree }}</h3>
          <span class="flex text-gray-500 p-1.5">
            <span class="pr-2 text-3xl">
              <Icon icon="mdi:calendar-clock-outline"/>
            </span>
            {{ education.startDate }} - {{ education.endDate }}
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
            {{ education.location }}
          </p>

          <p class="flex text-gray-500 p-1.5">
            <span class="pr-2 text-3xl">
              <Icon icon="mdi-office-building"/>
            </span>
            {{ education.institution }}
          </p>

          <p class="text-gray-600 p-1.5">
            {{ education.description }}
          </p>

          <div class="flex flex-wrap gap-2 p-1.5">
            <TagItem v-for="item in education.tags" :key="item" :text="item" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import TagItem from '@/components/TagItem.vue';
import type { Education } from '@/types/content.ts';

defineProps<{
  education: Education,
}>();

const collapsed = ref(true);

const toggle = () => {
  collapsed.value = !collapsed.value;
};
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

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

i img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
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

  i {
    left: calc(5%);
    position: absolute;
    border: 1px solid var(--color-border);
    background: #3c8082;
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  i img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
}
</style>