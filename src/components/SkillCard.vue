<template>
  <div class="card">
    <div class="card-content">
      <table class="table">
        <thead>
          <tr>
            <th><font-awesome-icon :icon="['fas', 'circle-info']" /></th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in this.skill.metadata" :key="key">
            <th class="is-capitalized">{{ key }}</th>
            <td class="is-capitalized">{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    skill: Object,
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
  display: inline-block;
}
</style>
