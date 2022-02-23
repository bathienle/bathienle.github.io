<template>
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
        <a class="navbar-item"><router-link :to="{ name: 'Home' }">Home</router-link></a>
        <a class="navbar-item"><router-link :to="{ name: 'Project' }">Project</router-link></a>
        <a class="navbar-item"><router-link :to="{ name: 'Contact' }">Contact</router-link></a>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" href="https://github.com/bathienle">
              <span class="icon"><i class="fa-brands fa-github"></i></span>
              <span>GitHub</span>
            </a>
          </p>
          <p class="control">
            <a class="bd-tw-button button" href="https://be.linkedin.com/in/bathien-le">
              <span class="icon"><i class="fa-brands fa-linkedin"></i></span>
              <span>LinkedIn</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
