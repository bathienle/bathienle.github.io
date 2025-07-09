<template>
  <div class="item">
    <i>
      <component :is="icon" class="size-8 text-blue-500" />
    </i>
    <div class="details w-full">
      <div class="flex items-center justify-between cursor-pointer select-none" @click="toggle">
        <div>
          <h3>{{ item.title }}</h3>
          <span class="flex text-gray-500 p-1.5">
            <span class="pr-2">
              <component :is="dateIcon" class="size-6 text-blue-500" />
            </span>
            {{ item.startDate }} - {{ item.endDate }}
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
          <p v-if="item.location" class="flex text-gray-700 p-1.5">
            <span class="pr-2">
              <component :is="locationIcon" class="size-6 text-blue-500" />
            </span>
            {{ item.location }}
          </p>
          <p v-if="item.institution || item.company" class="flex text-gray-700 p-1.5">
            <span class="pr-2">
              <component :is="institutionIcon" class="size-6 text-blue-500" />
            </span>
            {{ item.institution || item.company }}
          </p>
          <p v-if="item.description" class="text-gray-600 p-1.5">
            {{ item.description }}
          </p>
          <ul v-if="item.achievements && item.achievements.length" class="list-disc text-gray-600 pl-7.5 p-1.5">
            <li v-for="(ach, index) in item.achievements" :key="index">
              {{ ach }}
            </li>
          </ul>
          <div v-if="item.tags && item.tags.length" class="flex flex-wrap gap-2 p-1.5">
            <TagItem v-for="tag in item.tags" :key="tag" :text="tag" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Component } from 'vue';
import TagItem from '@/components/TagItem.vue';

defineProps<{
  item: Record<string, Component>,
  icon: Component,
  locationIcon?: Component,
  institutionIcon?: Component,
  dateIcon?: Component
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

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
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
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}
</style>