<template>
  <div id="project">
    <h1 class="title is-uppercase">Projects</h1>

    <div class="columns is-multiline is-centered">
      <div
        class="column is-narrow"
        v-for="project in projects"
        :key="project.title"
      >
        <project-card :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Project",
  components: {
    ProjectCard,
  },
  props: {
    projects: Object,
  },
};
</script>
