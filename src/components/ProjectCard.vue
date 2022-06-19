<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        <figure v-if="avatar_url" class="image is-64x64">
          <img :src="avatar_url" alt="avatar" />
        </figure>
        <p class="pl-2">{{ project.title }}</p>
      </div>

      <div class="card-content">
        <span class="p-1" v-if="blog">
          <a :href="blog">
            <font-awesome-icon :icon="['fas', 'link']" />
          </a>
        </span>
        <span class="p-1" v-if="project.metadata.link != null">
          <a :href="project.metadata.link">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </span>
        <span class="p-1" v-if="watchers > 0">
          <font-awesome-icon :icon="['fas', 'eye']" /> {{ watchers }}
        </span>
        <span class="p-1" v-if="forks > 0">
          <font-awesome-icon :icon="['fas', 'code-fork']" /> {{ forks }}
        </span>
        <span class="p-1" v-if="stars > 0">
          <font-awesome-icon :icon="['fas', 'star']" /> {{ stars }}
        </span>
      </div>
    </div>

    <div class="card-content">
      {{ project.metadata.description }}
    </div>

    <footer v-if="type == 'repo'" class="card-footer">
      <p class="card-footer-item">
        <font-awesome-icon class="p-1" :icon="['fas', 'code']" />
        {{ language }}
      </p>
      <p class="card-footer-item">
        <font-awesome-icon class="p-1" :icon="['fas', 'file-lines']" />
        {{ license.name }}
      </p>
    </footer>
  </div>
</template>

<script>
import { octokit } from "@/octokit.js";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data: () => ({
    type: "",
    watchers: -1,
    forks: -1,
    stars: -1,
    language: "",
    license: "",
    avatar_url: "",
    blog: "",
  }),
  methods: {
    getRepository(owner, repo) {
      return octokit.request("GET /repos/" + owner + "/" + repo);
    },
    getRepoContent(repository) {
      this.watchers = repository.data.watchers_count;
      this.forks = repository.data.forks_count;
      this.stars = repository.data.stargazers_count;

      this.language = repository.data.language;
      this.license = repository.data.license;
    },
    getOrganisation(org) {
      return octokit.request("GET /orgs/" + org);
    },
    getOrgContent(org) {
      this.avatar_url = org.data.avatar_url;
      this.blog = org.data.blog;
    },
  },
  mounted() {
    let [owner, repo] = this.project.metadata.link.split("/").slice(3, 5);
    if (repo !== undefined) {
      this.type = "repo";
      this.getRepository(owner, repo).then((repository) =>
        this.getRepoContent(repository)
      );
    } else {
      this.type = "org";
      this.getOrganisation(owner).then((org) => this.getOrgContent(org));
    }
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
  width: 400px;
  height: 200px;
}
</style>
