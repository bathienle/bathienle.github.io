<template>
  <div>
    <Navbar :user="user" />
    <Home :user="user" />
    <About class="container p-4" :user="user" />
    <Experience class="container p-4" :experiences="experiences" />
    <Skill class="container p-4" :skills="skills" />
    <Project class="container p-4" :projects="projects" />
    <Footer :user="user" />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer.vue";
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
    Footer,
  },
  data: () => ({
    user: {},
    experiences: {},
    skills: {},
    projects: {},
  }),
  methods: {
    fetchProfilePicture() {
      return bucket.getMedia({ props: "imgix_url,original_name" });
    },
    fetchData() {
      return new Promise((resolve) => resolve(bucket.getObjects({ props: "title,content,type,metadata" })));
    },
    getData(type, objects) {
      return objects.filter((item) => item.type === type);
    },
    fillUserInfo(userInfo) {
      let metadata = userInfo.metadata;
      this.user = {
        first_name: metadata.first_name,
        last_name: metadata.last_name,
        description: metadata.description,
        job_title: metadata.job_title,
        email: metadata.email,
        office: metadata.office,
        work_address: metadata.work_address,
        github: metadata.github,
        linkedin: metadata.linkedin,
        website_url: metadata.personal_website
      };
    },
    fillExperiences(experiences) {
      this.experiences = {
        education: experiences.filter((item) => item.metadata.type === "education"),
        work: experiences.filter((item) => item.metadata.type === "work"),
      };
    },
  },
  created() {
    this.fetchData().then((values) => {
      let objects = values.objects;
      this.fillUserInfo(this.getData("user", objects).pop());
      this.fillExperiences(this.getData("experiences", objects));
      this.skills = this.getData("skills", objects);
      this.projects = this.getData("projects", objects);
    });

    this.fetchProfilePicture().then((images) => {
      let picture = images.media.filter((item) => item.original_name.includes("profile")).pop();
      this.user["profile_picture"] = picture.imgix_url;
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

div h1 {
  padding-top: 50px;
}
</style>
