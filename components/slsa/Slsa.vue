<template>
  <!-- Main paragraph with specific styling -->
  <p
    class="text-midnightBlue font-roboto text-2xl md:text-3xl font-bold leading-[93%] tracking-[-0.64px] mb-[27px] mt-[33px]"
    id="slsa"
  >
    SLSA
  </p>
  <!-- Border with padding and a hidden CustomHeading component -->
  <div class="border-b border-gamboge ps-[13px] pb-2">
    <CustomHeading title="Source Threats" type="subheading"/>
  </div>
  <!-- Container for cards with responsive styling -->
  <div
    class="xl:mb-[57px] justify-center md:justify-start mt-[38px] xl:gap-y-10 xl:gap-x-10 xl:flex-nowrap gap-y-6 flex flex-wrap w-full xl:max-w-[60%] 2xl:pe-10 xl:pe-6"
  >
    <!-- Looping through sourceThreats and rendering Card components -->
    <div
      v-for="(content, index) in sourceThreats"
      class="xl:w-1/3 md:w-4/12 xl:px-0 px-3 small:w-6/12 w-full"
      :key="index"
    >
      <!-- Container for individual card with fixed height -->
      <div class="w-full h-full min-h-[205px]">
        <!-- Rendering Card component with dynamic props -->
        <Card
          :type="content.type"
          :title="content.title"
          :rank="content.rank"
          :growth="content.growth"
        />
      </div>
    </div>
  </div>

  <!-- Container for Build component with responsive styling -->
  <div class="flex flex-wrap mt-6 mb-[10px] sm:my-6 lg:gap-y-10 gap-y-5">
    <Build />
    <!-- Rendering Build component -->
  </div>
</template>
<script setup lang="ts">
import { sourceThreats } from "../../utils/helper"; // Importing sourceThreats from helper file
import CustomHeading from "../common/CustomHeading.vue"; // Importing CustomHeading component
import Build from "./Build.vue"; // Importing Build component
import Card from "./Card.vue"; // Importing Card component
</script>
<style scoped></style>
