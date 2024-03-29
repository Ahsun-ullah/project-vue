<template>
  <!-- Container flex layout -->
  <div class="flex justify-between items-center">
    <!-- Left section with icon and heading -->
    <div class="flex items-center gap-2">
      <!-- Icon displayed next to the heading -->
      <img
        :src="iconUrl"
        alt="icon-heading"
        class="max-w-[30px] sm:max-w-[40px] xl:max-w-[58px]"
      />
      <!-- Heading -->
      <h2
        class="font-bold text-xl sm:text-2xl xl:text-3xl text-darkSlateGray xl:leading-[48px] font-roboto"
      >
        {{ heading }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props definition
defineProps({
  // URL of the icon to be displayed
  iconUrl: String,
  // Heading text to be displayed
  heading: String,
});
</script>
