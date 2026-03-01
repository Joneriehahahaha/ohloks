<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
    <div v-for="project in projects" 
         :key="project.id"
         class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
    >
      <router-link :to="project.link">
        <div>
          <img 
            :src="project.img" 
            :alt="project.title" 
            class="rounded-t-xl border-none"
          />
        </div>
        <div class="text-center px-4 py-6">
          <p class="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
            {{ project.title }}
          </p>
          <span class="text-lg text-ternary-dark dark:text-ternary-light">
            {{ project.category }}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects';

export default {
  name: 'ProjectsGrid',
  data() {
    return {
      projects: projects
    };
  }
};
</script> 