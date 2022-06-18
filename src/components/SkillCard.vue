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
            <td>
              <span v-for="item in rankToStar(value)" :key="item">
                <font-awesome-icon class="mr-1" :icon="['fas', 'star']" />
              </span>
              <span v-for="item in 5 - rankToStar(value)" :key="item">
                <font-awesome-icon class="mr-1" :icon="['far', 'star']" />
              </span>
            </td>
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
  methods: {
    rankToStar(rank) {
      const ranking = {
        bronze: 1,
        silver: 2,
        gold: 3,
        platinum: 4,
        diamond: 5,
      };

      return ranking[rank];
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
  display: inline-block;
}
</style>
