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
