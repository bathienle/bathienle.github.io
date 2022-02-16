<template>
  <div class="project">
    <h1>Project</h1>

    <div align="center">
      <table>
        <tr>
          <td>Repository name</td>
          <td>Description</td>
          <td>Fork</td>
          <td>Stars</td>
          <td>Watch</td>
        </tr>
        <tr v-for="repo in repos" v-bind:key="repo.id">
          <td>{{ repo.name }}</td>
          <td>{{ repo.description }}</td>
          <td>{{ repo.forks_count }}</td>
          <td>{{ repo.stargazers_count }}</td>
          <td>{{ repo.watchers_count }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
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
