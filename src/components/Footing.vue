<template>
  <footer>Copyright &copy; Ba Thien Le {{ year }}</footer>
</template>

<script>
export default {
  name: "Footing",
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  bottom: 10px;
  left: 0px;
  right: 0px;
  position: fixed;
  text-align: center;
}
</style>
