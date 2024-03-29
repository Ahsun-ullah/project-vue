<script setup lang="ts">
// Define props for the component
defineProps({
  type: String,
  title: String,
  imageStyle: String,
  icon: String,
});
</script>

<template>
  <!-- Container for the heading -->
  <div class="flex justify-between items-center">
    <!-- Heading content -->
    <div class="flex items-center heading gap-2">
      <!-- Display icon if provided -->
      <div v-if="icon" :class="imageStyle">
        <img
          :src="icon"
          alt="icon"
          :class="title === 'OWASP TOP10 2021' && 'w-[85px]'"
        />
      </div>
      <!-- Title of the heading -->
      <h2
        :class="
          type === 'subheading'
            ? 'md:text-xl text-base font-roboto font-bold  text-comet  text-nowrap'
            : 'text-midnightBlue font-bold md:text-[32px] sm:text-xl text-base tracking-[-.6px] font-roboto  text-nowrap'
        "
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<style scoped></style>
