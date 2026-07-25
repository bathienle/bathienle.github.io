<template>
  <div>
    <HeroSection />

    <main>
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import AboutSection from '@/sections/AboutSection.vue';
import EducationSection from '@/sections/EducationSection.vue';
import ExperienceSection from '@/sections/ExperienceSection.vue';
import HeroSection from '@/sections/HeroSection.vue';
import ProjectSection from '@/sections/ProjectSection.vue';
import StackSection from '@/sections/StackSection.vue';
</script>
