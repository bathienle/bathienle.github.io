<template>
  <div>
    <AppNavbar />

    <HomeView />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';

import type { Content } from '@/types/content.ts';

import contentData from '@/data/content.json';
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import HomeView from '@/views/HomeView.vue';

const content = ref<Content>(contentData);
provide('content', content);
</script>
