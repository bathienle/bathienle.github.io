<template>
  <section id="about" class="scroll-mt-10">
    <h2 class="text-center  text-3xl text-neutral font-bold p-1.5">About Me</h2>

    <div class="py-4">
      <hr class="w-full border-t-2 border-neutral my-2">
    </div>

    <div class="flex flex-wrap justify-center gap-3 mb-6">
      <StatCard v-for="(stat, index) in about?.stats" :stat="stat" :key="index" />
    </div>

    <div v-if="about" class="flex flex-col gap-4">
      <p class="bg-secondary rounded-2xl text-justify p-4">
        {{ about.description }}
      </p>

      <div class="flex gap-8">
        <TopicBox v-for="(topic, index) in about.interests" :topic="topic" :key="index" class="flex-1" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import StatCard from '@/components/StatCard.vue';
import TopicBox from '@/components/TopicBox.vue';

import type { Ref } from 'vue';
import type { Content } from '@/types/content.ts';

const content = inject<Ref<Content>>('content');
const about = computed(() => content?.value?.about);
</script>
