<template>
  <div id="skill">
    <h1 class="title is-uppercase">Skills</h1>

    <div class="tabs is-centered is-boxed">
      <ul>
        <li
          v-for="item in this.skills"
          :key="item.title"
          :class="{ 'is-active': activeTab === item.title }"
          v-on:click="activeTab = item.title"
        >
          <a>{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <div
      v-for="item in this.skills"
      :key="item.title"
      v-show="activeTab == item.title"
    >
      <SkillCard :skill="item" />
    </div>
  </div>
</template>

<script>
import SkillCard from "@/components/SkillCard.vue";

export default {
  name: "Skill",
  components: {
    SkillCard,
  },
  props: {
    skills: Object,
  },
  data: () => ({
    activeTab: undefined,
  }),
  watch: {
    skills(skills) {
      if (!skills) return;
      this.activeTab = skills[0].title;
    },
  },
};
</script>
