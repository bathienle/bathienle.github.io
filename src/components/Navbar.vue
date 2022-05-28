<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bathienle.github.io/">
          <p class="is-size-4 has-text-weight-semibold">Ba Thien Le</p>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'Home' }">
            Home <img class="m-1" src="@/assets/icons/home.png" />
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'About' }">
            About <img class="m-1" src="@/assets/icons/about.png" />
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'Experience' }">
            Experience <img class="m-1" src="@/assets/icons/experience.png" />
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'Skill' }">
            Skill <img class="m-1" src="@/assets/icons/skill.png" />
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'Project' }">
            Project <img class="m-1" src="@/assets/icons/project.png" />
          </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" href="https://github.com/bathienle">
                <span class="icon"><font-awesome-icon :icon="['fab', 'github']" /></span>
                <span>GitHub</span>
              </a>
            </p>
            <p class="control">
              <a class="bd-tw-button button" href="https://be.linkedin.com/in/bathien-le">
                <span class="icon"><font-awesome-icon :icon="['fab', 'linkedin']" /></span>
                <span>LinkedIn</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: hsl(0, 0%, 4%);
}

.navbar-brand a, .navbar-menu a {
  color: white;
}

.button:hover {
  background-color: hsl(209, 100%, 26%);
  color: white;
}
</style>
