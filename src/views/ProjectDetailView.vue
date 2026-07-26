<template>
  <div class="min-h-screen relative overflow-hidden bg-dominant">
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(43,127,255,0.10) 0%, transparent 65%);"
    />

    <div class="max-w-4xl w-full mx-auto px-6 py-24 relative z-10">
      <RouterLink
        to="/#project"
        class="inline-flex items-center gap-2 text-neutral/60 hover:text-accent transition-colors mb-8"
      >
        <Icon icon="mdi:arrow-left" class="w-4 h-4" />
        Back to projects
      </RouterLink>

      <div v-if="project" class="flex flex-col gap-8">
        <h1 class="text-4xl md:text-5xl font-bold text-center">{{ project.title }}</h1>

        <div class="w-full overflow-hidden rounded-2xl border border-neutral">
          <img class="object-contain w-full h-full" :src="project.image" :alt="project.title" />
        </div>

        <div class="flex flex-col gap-6 p-4 sm:p-6 bg-secondary border border-neutral rounded-2xl">
          <h2 class="flex items-center gap-2 text-xl font-semibold">
            <Icon class="text-2xl" icon="material-symbols:overview-outline" />
            Overview
          </h2>

          <div class="flex flex-col gap-6">
            <div>
              <p class="text-xs uppercase tracking-wide text-neutral/50 mb-1">Timeline</p>
              <p>{{ project.startDate }} - {{ project.endDate }}</p>
            </div>

            <div>
              <p class="text-xs uppercase tracking-wide text-neutral/50 mb-1">Status</p>
              <p>{{ project.status }}</p>
            </div>

            <div>
              <p class="text-xs uppercase tracking-wide text-neutral/50 mb-1">Description</p>
              <p class="text-neutral/80 leading-relaxed">{{ project.description }}</p>
            </div>

            <div>
              <p class="text-xs uppercase tracking-wide text-neutral/50 mb-2">Keywords</p>
              <div class="flex flex-wrap gap-2">
                <TagItem v-for="tag in project.tags" :key="tag" :text="tag" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <TechIcon v-for="tech in project.stack" :key="tech.key" :tech="tech" />
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            class="flex items-center gap-2 p-3 bg-dominant border border-neutral rounded-2xl hover:text-accent"
            :href="project.repository"
            target="_blank"
            rel="noopener"
          >
            <Icon class="text-xl" icon="mdi:github" />
            <span>View Code</span>
          </a>
          <a
            v-if="project.link"
            class="flex items-center gap-2 p-3 bg-accent rounded-2xl hover:text-dominant"
            :href="project.link"
            target="_blank"
            rel="noopener"
          >
            <Icon class="text-xl" icon="mdi:external-link" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      <div v-else class="text-center py-16">
        <p class="text-lg text-neutral/60 mb-6">This project could not be found.</p>
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl hover:bg-accent/90"
        >
          Back to Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

import TagItem from '@/components/TagItem.vue';
import TechIcon from '@/components/TechIcon.vue';

const route = useRoute();
const content = inject<Ref<Content>>('content');
const project = computed(() =>
  content?.value?.projects.find(project => project.slug === route.params.slug),
);
</script>
