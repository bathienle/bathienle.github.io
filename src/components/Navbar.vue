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
        <div class="navbar-end">
          <a class="navbar-item" href="#home">
            <font-awesome-icon class="p-1" :icon="['fas', 'house']" size="2x" /> Home
          </a>
          <a class="navbar-item" href="#about">
            <font-awesome-icon class="p-1" :icon="['fas', 'address-card']" size="2x" /> About
          </a>
          <a class="navbar-item" href="#experience">
            <font-awesome-icon class="p-1" :icon="['fas', 'briefcase']" size="2x" /> Experience
          </a>
          <a class="navbar-item" href="#skill">
            <font-awesome-icon class="p-1" :icon="['fas', 'screwdriver-wrench']" size="2x" /> Skill
          </a>
          <a class="navbar-item" href="#project">
            <font-awesome-icon class="p-1" :icon="['fas', 'code']" size="2x" /> Project
          </a>
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
