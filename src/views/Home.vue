<template>
  <div id="home">
    <div class="vertical-center">
      <h1 class="title is-uppercase is-size-2 has-text-weight-bold">
        {{ user.first_name }} {{ user.last_name }}
      </h1>

      <hr />

      <h2 class="subtitle is-uppercase is-size-4 has-text-weight-bold p-4">
        {{ user.job_title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
#home {
  background-image: url("../assets/images/background.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: 100%;
}

.vertical-center {
  position: absolute;
  top: 40%;
  width: 100%;
}

h1, h2 {
  color: white;
}

hr {
  background-color: hsl(209, 100%, 26%);
  height: 5px;
  margin: 0 auto;
  width: 30%;
}
</style>
