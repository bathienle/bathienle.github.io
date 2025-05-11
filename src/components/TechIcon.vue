<template>
  <div class="max-w-sm overflow-hidden shadow-lg">
    <div class="h-12 w-full overflow-hidden">
      <a :href="tech.url" target="_blank" rel="noopener">
        <img class="object-contain w-full h-full" :alt="tech.name" :src="getImageSrc()" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tech: { type: Object, required: true },
});

function getImageSrc() {
  return `/images/tech-stack-icons/${props.tech.key}.svg`;
}
</script>
