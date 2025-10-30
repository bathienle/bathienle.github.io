<template>
  <section id="about" class="scroll-mt-10">
    <h2 class="text-center  text-3xl text-neutral font-bold p-1.5">About Me</h2>

    <div class="py-4">
      <hr class="w-full border-t-2 border-neutral my-2">
    </div>

    <div v-if="about" class="grid grid-cols-2 gap-4">
      <div>
        <h3 class="text-center text-lg font-semibold mb-3">About</h3>
        <p class="bg-secondary rounded-2xl text-justify p-4">
          {{ about.description }}
        </p>
      </div>

      <div>
        <h3 class="text-center text-lg font-semibold mb-3">Interests</h3>
        <div class="grid gap-2">
          <TopicBox v-for="(topic, index) in about.interests" :topic="topic" :key="index" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import TopicBox from '@/components/TopicBox.vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const content = inject<Ref<Content>>('content');
const about = computed(() => content?.value?.about);
</script>
