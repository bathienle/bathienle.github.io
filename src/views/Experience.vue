<template>
  <div id="experience">
    <h1 class="title is-uppercase">Experience</h1>
    <h2 class="subtitle is-uppercase">Academic and Professional</h2>

    <div class="tabs is-medium is-centered">
      <ul>
        <li
          :class="{ 'is-active': activeTab === 'education' }"
          v-on:click="activeTab = 'education'"
        >
          <a>
            <font-awesome-icon
              class="pb-1 mr-1"
              :icon="['fas', 'graduation-cap']"
            />
            Education
          </a>
        </li>
        <li
          :class="{ 'is-active': activeTab === 'work' }"
          v-on:click="activeTab = 'work'"
        >
          <a>
            <font-awesome-icon class="pb-1 mr-1" :icon="['fas', 'briefcase']" />
            Work
          </a>
        </li>
      </ul>
    </div>

    <div class="timeline is-centered" v-show="activeTab == 'education'">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Today</span>
      </header>

      <div
        class="timeline-item is-primary"
        v-for="item in this.experiences.education"
        :key="item.title"
      >
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading is-size-5">
            {{ formatDate(item.metadata.start_date) }} -
            {{ formatDate(item.metadata.end_date) }}
          </p>
          <experience-card :experience="item" />
        </div>
      </div>

      <header class="timeline-header">
        <span class="tag is-medium is-primary">Start</span>
      </header>
    </div>

    <div class="timeline is-centered" v-show="activeTab == 'work'">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Today</span>
      </header>

      <div
        class="timeline-item is-primary"
        v-for="item in this.experiences.work"
        :key="item.title"
      >
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading is-size-5">
            {{ formatDate(item.metadata.start_date) }} -
            {{ formatDate(item.metadata.end_date) }}
          </p>
          <experience-card :experience="item" />
        </div>
      </div>

      <header class="timeline-header">
        <span class="tag is-medium is-primary">Start</span>
      </header>
    </div>
  </div>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard.vue";

export default {
  name: "Experience",
  components: {
    ExperienceCard,
  },
  props: {
    experiences: Object,
  },
  data: () => ({
    activeTab: "education",
  }),
  methods: {
    formatDate(rawDate) {
      const options = { year: "numeric", month: "long" };
      let date = new Date(rawDate).toLocaleDateString("en-BE", options);
      return date == "Invalid Date" ? "Present" : date;
    },
  },
};
</script>
