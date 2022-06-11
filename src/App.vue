<template>
  <div class="has-background-black"><navbar /></div>
  <div class="container">
    <home />
    <about />
    <experience />
    <skill />
    <project />
    <footing />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import Footing from "@/components/Footing.vue";
import Navbar from "@/components/Navbar.vue";
import About from "@/views/About.vue";
import Experience from "@/views/Experience.vue";
import Skill from "@/views/Skill.vue";
import Project from "@/views/Project.vue";

import { bucket } from "./cosmic.js";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Experience,
    Skill,
    Project,
    Footing,
  },
  data: () => ({
    user: {},
    experiences: {},
    skills: {},
    projects: {},
  }),
  methods: {
    fetchData() {
      return new Promise((resolve) => {
        resolve(bucket.getObjects({ props: "title,type,content,metadata" }));
      });
    },
    getData(type, objects) {
      return objects.filter((item) => item.type === type);
    },
    fillUserInfo(userInfo) {
      let metadata = userInfo.metadata;
      this.user = {
        name: metadata.name,
        job_title: metadata.job_title,
        office: metadata.office,
        work_address: metadata.work_address,
        github: metadata.github,
        linkedin: metadata.linkedin,
      };
    },
    fillExperiences(experiences) {
      this.experiences = {
        education: experiences.filter(
          (item) => item.metadata.type === "education"
        ),
        work: experiences.filter((item) => item.metadata.type === "work"),
      };
    },
  },
  created() {
    this.fetchData().then((values) => {
      let objects = values.objects;
      this.fillUserInfo(this.getData("user", objects).pop());
      this.fillExperiences(this.getData("experiences", objects));
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
