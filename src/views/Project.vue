<template>
  <div class="project">
    <h1 class="title">Project</h1>

    <div v-for="repo in repos" v-bind:key="repo.id">
      <card
        :name="repo.name"
        :description="repo.description"
        :forks="repo.forks_count"
        :stars="repo.stargazers_count"
        :watchers="repo.watchers_count"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Card from "@/components/Card.vue";

export default {
  components: { Card },
  data() {
    return { repos: undefined };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/bathienle/repos")
      .then((response) => {
        this.repos = response.data;
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  },
};
</script>
