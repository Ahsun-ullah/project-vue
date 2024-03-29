<template>
  <div id="owsap">
    <!-- CustomHeading component with OWASP TOP10 2021 title and hidden attribute -->
    <CustomHeading :icon="owaspLogo" title="OWASP TOP10 2021" />
    <div
      class="flex flex-wrap max-[1280px]:justify-center md:mt-[50px] desktop:gap-10 xl:gap-y-10 gap-y-6 mt-8 mb-[50px] sm:mb-[75px] md:mb-20 lg:mb-[106px]"
    >
      <div
        class="xl:w-1/5 md:w-4/12 small:w-6/12 w-full desktop:px-0 xl:px-5 px-3 desktop:max-w-[182px]"
        v-for="(content, index) in topRank"
        :key="index"
      >
        <div class="w-full h-full min-h-[205px]">
          <!-- Cards component with dynamic title, description, and rank -->
          <Cards
            :title="content.title"
            :description="content.description"
            :rank="content.rank"
          />
          <!-- Typo: should be "description" instead of "description" -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Importing necessary functions and components
import { topRank } from "../../utils/helper";
import CustomHeading from "../common/CustomHeading.vue";
import Cards from "./Cards.vue";
import owaspLogo from "/assets/images/owasp/logo.png";
</script>

<style scoped></style>
