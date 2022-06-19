<template>
  <table class="table">
    <thead>
      <tr>
        <th><font-awesome-icon :icon="['fas', 'circle-info']" /></th>
        <th>Contact Information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th><font-awesome-icon :icon="['fas', 'envelope']" /></th>
        <td><a :href="'mailto:' + email">{{ email }}</a></td>
      </tr>
      <tr>
        <th><font-awesome-icon :icon="['fas', 'location-dot']" /></th>
        <td>{{ work_address }}</td>
      </tr>
      <tr>
        <th><font-awesome-icon :icon="['fas', 'building']" /></th>
        <td>{{ office }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    email: String,
    work_address: String,
    office: String,
  },
};
</script>

<style scoped>
.table th, td {
  vertical-align: middle;
  white-space: pre-line;
}
</style>
