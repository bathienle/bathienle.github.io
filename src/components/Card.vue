<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        <a :href="url">{{ name }}</a>
      </p>
      <p class="card-content">
        Watchers: {{ watchers }} Forks: {{ forks }} Stars: {{ stars }}
      </p>
    </div>

    <div class="card-content">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    description: String,
    url: String,
    forks: Number,
    stars: Number,
    watchers: Number,
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
  height: 160px;
}
</style>
