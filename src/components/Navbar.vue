<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" :href="user.website_url">
        <p class="is-size-4 has-text-weight-semibold">
          {{ user.first_name }} {{ user.last_name }}
        </p>
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
          <font-awesome-icon class="p-1" :icon="['fas', 'house']" size="2x" />
          Home
        </a>
        <a class="navbar-item" href="#about">
          <font-awesome-icon class="p-1" :icon="['fas', 'address-card']" size="2x" />
          About
        </a>
        <a class="navbar-item" href="#experience">
          <font-awesome-icon class="p-1" :icon="['fas', 'briefcase']" size="2x" />
          Experience
        </a>
        <a class="navbar-item" href="#skill">
          <font-awesome-icon class="p-1" :icon="['fas', 'screwdriver-wrench']" size="2x" />
          Skill
        </a>
        <a class="navbar-item" href="#project">
          <font-awesome-icon class="p-1" :icon="['fas', 'code']" size="2x" />
          Project
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.navbar {
  background-color: hsl(0, 0%, 4%);
}

.navbar-brand a,
.navbar-menu a {
  color: white;
}

.navbar-brand {
  margin-left: 250px;
}

.navbar-end {
  margin-right: 250px;
}

.button:hover {
  background-color: hsl(209, 100%, 26%);
  color: white;
}
</style>
