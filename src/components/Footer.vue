<template>
  <footer>
    Copyright &copy; {{ user.first_name }} {{ user.last_name }} {{ year }}
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    user: Object,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  padding: 10px 20px 10px 20px;
}
</style>
