<template>
  <div class="bg-mountainMist pt-14 md:pt-[70px] pb-10 md:pb-16">
    <div class="flex flex-col justify-center items-center px-4 xl:px-0">
      <!-- Displaying footer logo -->
      <img
        src="/assets/Icons/footer_logo.svg"
        alt="footer_logo"
        class="max-w-[150px] md:max-w-[184px] min-h-[59px]"
      />

      <!-- Displaying text links -->
      <div class="flex flex-wrap justify-center gap-3 md:gap-[20px] mt-[15px]">
        <a
          v-for="(link, index) in footerLinks"
          :key="index"
          :href="link.href"
          class="font-roboto text-base leading-6 text-white transition-all duration-300 ease-linear hover:text-purple"
        >
          {{ link.link }}
        </a>
      </div>

      <!-- Displaying SVG icons -->
      <div class="flex flex-wrap gap-4 my-8 md:my-10">
        <a
          target="_blank"
          v-for="(link, index) in footerIcon"
          :key="index"
          :href="link.href"
          class="block hover:scale-110 transition-all duration-300 ease-linear"
        >
          <img :src="link.icon" alt="social-links" />
        </a>
      </div>
      <div class="border-t max-w-[1232px] w-full border-white"></div>
      <p class="font-roboto text-base leading-6 text-white mt-8 md:mt-10">
        Copyright Plexicus • Privacy Policy
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { footerIcon, footerLinks } from "../utils/helper";
</script>

<style scoped></style>
