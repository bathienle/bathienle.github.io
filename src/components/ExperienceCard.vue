<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">{{ experience.title }}</p>
    </div>

    <div class="card-content"><p v-html="experience.content"></p></div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    experience: Object,
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
</style>
