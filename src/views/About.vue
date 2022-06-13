<template>
  <div class="about">
    <h1 class="title mt-4">ABOUT ME</h1>

    <div class="columns">
      <div class="column is-4 is-offset-2">
        <table>
          <tbody>
            <tr>
              <td><img src="@/assets/profile.jpg" alt="Profile picture" /></td>
            </tr>
            <tr>
              <td>
                <a :href="user.github">
                  <font-awesome-icon class="m-1" :icon="['fab', 'github']" size="2x" />
                </a>
                <a :href="user.linkedin">
                  <font-awesome-icon class="m-1" :icon="['fab', 'linkedin']" size="2x" />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <info-card
                  :email="user.email"
                  :work_address="user.work_address"
                  :office="user.office"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="column column is-4">
        <p>{{ user.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  name: "About",
  components: {
    InfoCard,
  },
  props: {
    user: Object,
  },
};
</script>

<style scoped>
img {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
