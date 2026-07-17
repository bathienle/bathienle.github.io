<template>
  <footer class="border-t border-white/5 mt-16">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <p class="text-sm font-mono font-bold tracking-wider text-neutral/30 mb-3">
            {{ initials }}
          </p>
          <h2 class="text-xl font-bold text-neutral mb-2">{{ fullName }}</h2>
          <p class="text-neutral/40 text-sm leading-relaxed mb-5">{{ profile?.signature }}</p>

          <div v-if="profile?.email" class="mb-5">
            <a
              :href="`mailto:${profile.email}`"
              class="inline-flex items-center gap-2 text-neutral/50 text-sm transition-colors duration-200 hover:text-accent"
            >
              <Icon icon="mdi:email-outline" class="w-4 h-4" />
              {{ profile.email }}
            </a>
          </div>

          <div class="flex gap-3">
            <a
              v-for="social in profile?.socials"
              :key="social.key"
              :href="social.url"
              rel="noopener"
              target="_blank"
              class="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 text-neutral/40 transition-all duration-200 hover:border-accent/40 hover:text-accent"
              :aria-label="`Visit ${social.key} profile`"
            >
              <Icon :icon="`mdi:${social.key}`" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <nav>
          <h3 class="text-xs font-mono text-neutral/30 uppercase tracking-[0.2em] mb-4">Navigate</h3>
          <ul class="flex flex-col gap-2">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="text-neutral/50 text-sm hover:text-accent transition-colors duration-200"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 class="text-xs font-mono text-neutral/30 uppercase tracking-[0.2em] mb-4">Projects</h3>
          <ul class="flex flex-col gap-2">
            <li v-for="(project, index) in projects" :key="index">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener"
                class="text-neutral/50 text-sm hover:text-accent transition-colors duration-200"
              >
                {{ project.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p class="text-neutral/25 text-xs">
          &copy; {{ currentYear }} {{ fullName }}. All rights reserved.
        </p>
        <p class="text-neutral/25 text-xs">
          Built with Vue 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, inject } from 'vue';
import { useNavigation } from '@/composables/useNavigation';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const { links } = useNavigation();
const currentYear = new Date().getFullYear();
const content = inject<Ref<Content>>('content');
const projects = computed(() => content?.value?.projects);
const profile = computed(() => content?.value?.profile);

const fullName = computed(() => {
  const first = profile.value?.firstName ?? '';
  const last = profile.value?.lastName ?? '';
  return [first, last].filter(Boolean).join(' ');
});

const initials = computed(() => {
  const first = profile.value?.firstName?.[0] ?? '';
  const last = profile.value?.lastName?.[0] ?? '';
  return `${first}${last}`.toUpperCase();
});
</script>
