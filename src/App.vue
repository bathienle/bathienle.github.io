<template>
  <div class="has-background-black"><navbar /></div>
  <router-view />
  <footing />
</template>

<script>
import Footing from "@/components/Footing.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: { Footing, Navbar },
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
