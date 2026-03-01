<script>
import feather from "feather-icons";

export default {
  name: "Home",
  data: () => {
    return {
      theme: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section
    class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
  >
    <!-- Banner left contents -->
    <div class="w-full md:w-1/3 text-left">
      <h1
        class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
      >
        Hi, I'm Kryslee Miano
      </h1>
      <p
        class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"
      >
        A First Year College Student at Cordova Public College 
      </p>
      <div class="flex justify-center sm:block my-8">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow text-xl">
        Explore My Website
    </button>
</div>

    </div>

    <!-- Banner right illustration -->
    <div class="w-full md:w-2/3 text-right float-right">
      <img
        v-if="theme === 'light'"
        src="@/assets/images/micky.jpg"
        alt="Developer"
        class="rounded-full"
      />
      <img
        v-else
        src="@/assets/images/micky.jpg"
        alt="Developer"
        class="rounded-full"
      />
    </div>
  </section>
</template>

<style scoped></style>
