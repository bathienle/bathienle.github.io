<template>
  <h1 id="about" class="text-3xl text-gray-300 font-bold p-1.5">About</h1>

  <p v-if="about">
    {{ about.description }}
  </p>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content';

const content = inject<Ref<Content | null>>('content', ref(null));
const about = computed(() => content?.value?.about);
</script>