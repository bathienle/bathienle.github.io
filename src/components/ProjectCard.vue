<template>
  <div class="max-w-4xl w-full rounded-2xl overflow-hidden shadow-lg bg-secondary border border-neutral">
    <div class="grid grid-cols-2 items-center gap-4">
      <div>
        <h3>{{ project.title }}</h3>
      </div>

      <div>
        <div class="flex flex-col p-6 gap-5">
          <div class="w-full overflow-hidden rounded-2xl border border-neutral">
            <img class="object-contain w-full h-full" :src="project.image" :alt="project.title" />
          </div>

          <div class="flex justify-end gap-3">
            <a class="flex items-center gap-2 p-2 bg-dominant rounded-2xl hover:text-accent" :href="project.link"
              target="_blank" rel="noopener">
              <Icon class="text-xl" icon="mdi:external-link" />
              <span>Life Demo</span>
            </a>
            <a class="flex items-center gap-2 p-2 bg-accent rounded-2xl hover:text-dominant" :href="project.repository"
              target="_blank" rel="noopener">
              <Icon class="text-xl" icon="mdi:github" />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

import TagItem from '@/components/TagItem.vue';
import TechIcon from '@/components/TechIcon.vue';
import type { Project } from '@/types/content.ts';

defineProps<{
  project: Project,
}>();
</script>