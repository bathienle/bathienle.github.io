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
