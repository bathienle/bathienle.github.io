<template>
  <div>
    <AppNavbar v-if="!route.meta.bare" />

    <RouterView />

    <AppFooter v-if="!route.meta.bare" />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { useRoute } from 'vue-router';

import type { Content } from '@/types/content.ts';

import contentData from '@/data/content.json';
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';

const route = useRoute();
const content = ref<Content>(contentData);
provide('content', content);
</script>
