<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title is-centered">{{ name }}</p>
      <p>Watchers: {{ watchers }}</p>
      <p>Forks: {{ forks }}</p>
      <p>Stars: {{ stars }}</p>
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
    forks: Number,
    stars: Number,
    watchers: Number,
  },
};
</script>
