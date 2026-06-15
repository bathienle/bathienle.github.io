<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-dominant/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent'"
  >
    <div class="flex items-center justify-between h-16 px-6 max-w-4xl mx-auto gap-x-8">
      <a
        class="justify-self-start text-base font-mono font-bold tracking-wider text-neutral/70 hover:text-accent transition-colors duration-200"
        href="/"
        rel="noopener"
      >
        {{ initials }}
      </a>

      <nav class="hidden md:flex justify-center">
        <ul class="flex items-center gap-1">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="px-3 py-1.5 text-base rounded-lg transition-colors duration-200"
              :class="activeSection === link.href
                ? 'text-accent bg-accent/10'
                : 'text-neutral/50 hover:text-neutral hover:bg-white/5'
              "
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="hidden md:flex items-center justify-end gap-2">
        <a
          v-for="social in socials"
          :key="social.key"
          :href="social.url"
          rel="noopener"
          target="_blank"
          class="flex items-center justify-center w-8 h-8 rounded-lg text-neutral/40 transition-all duration-200 hover:text-accent hover:bg-accent/10"
          :aria-label="`Visit ${social.key} profile`"
        >
          <Icon :icon="`mdi:${social.key}`" class="w-6 h-6" />
        </a>
      </div>

      <button
        class="md:hidden justify-self-end flex items-center justify-center w-9 h-9 rounded-lg text-neutral/60 hover:text-neutral hover:bg-white/5 transition-colors duration-200"
        @click="toggleMenu"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
      >
        <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" class="w-5 h-5" />
      </button>
    </div>

    <Transition name="mobile-menu">
      <nav
        v-if="isOpen"
        class="md:hidden bg-dominant/95 backdrop-blur-xl border-t border-white/5"
      >
        <ul class="flex flex-col py-2">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="flex items-center px-6 py-3 text-base transition-colors duration-200"
              :class="
                activeSection === link.href
                  ? 'text-accent'
                  : 'text-neutral/60 hover:text-neutral'
              "
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="flex gap-4 px-6 py-4 border-t border-white/5">
          <a
            v-for="social in socials"
            :key="social.key"
            :href="social.url"
            rel="noopener"
            target="_blank"
            class="text-neutral/50 hover:text-accent transition-colors duration-200"
          >
            <Icon :icon="`mdi:${social.key}`" class="w-6 h-6" />
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useNavigation } from '@/composables/useNavigation';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const { links } = useNavigation();
const content = inject<Ref<Content>>('content');
const profile = computed(() => content?.value?.profile);
const socials = computed(() => content?.value?.profile?.socials);

const initials = computed(() => {
  const first = profile.value?.firstName?.[0] ?? '';
  const last = profile.value?.lastName?.[0] ?? '';
  return `${first}${last}`.toUpperCase();
});

const isOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref('');

const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  if (typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = `#${entry.target.id}`;
          }
        }
      },
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((s) => observer!.observe(s));
  }

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    observer?.disconnect();
  });
});
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
