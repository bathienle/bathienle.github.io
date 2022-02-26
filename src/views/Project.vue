<template>
  <div class="project">
    <h1 class="title mt-4">Projects</h1>

    <div class="columns is-multiline is-centered">
      <div class="column is-half" v-for="repo in repos" :key="repo.id">
        <card
          :name="repo.name"
          :description="repo.description"
          :url="repo.html_url"
          :forks="repo.forks_count"
          :stars="repo.stargazers_count"
          :watchers="repo.watchers_count"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Card from "@/components/Card.vue";

export default {
  name: "Project",
  components: { Card },
  data() {
    return { repos: undefined };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/bathienle/repos")
      .then((response) => {
        this.repos = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
