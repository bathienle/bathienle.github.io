<template>
  <header>
    <nav>
      <ul class="navbar">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'Project' }">Project</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
header {
  width: 80%;
}

ul {
  list-style: none;
}

li {
  padding: 10px;
  text-transform: uppercase;
}

.navbar {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}
</style>
