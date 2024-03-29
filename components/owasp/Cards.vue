<template>
  <!-- Container for the card -->
  <div
    class="h-full shadow-[0px_0px_30px_0px_rgba(56,_71,_109,_0.15)] pt-[39px] px-[11px] bg-white pb-[14px] flex flex-col items-center rounded-2xl justify-between hover:scale-95 transition-all ease-in-out duration-300"
  >
    <div class="flex flex-col justify-center items-center">
      <!-- Title of the card -->
      <p
        class="font-epilogue text-3xl text-gunSmoke leading-[normal] font-bold mb-[5px] text-center"
      >
        {{ title }}
      </p>

      <!-- Divider -->
      <div class="bg-black h-[1px] mb-[15px] w-[118px]"></div>

      <!-- Description of the card (if it's an array, loop through each item) -->
      <!-- <template> -->
      <p
        class="text-gunSmoke text-center font-epilogue text-sm font-normal mb-[6px] max-w-[99px] w-full !leading-[120%]"
      >
        {{ description }}
      </p>
      <!-- </template> -->
    </div>

    <!-- Rank of the card -->
    <p
      class="leading-[normal] font-bold text-center text-riverBed font-epilogue text-3xl"
    >
      {{ rank }}
    </p>
  </div>
</template>
<script setup lang="ts">
// Define props for the component
defineProps({
  title: String,
  description: String,
  rank: Number,
});
</script>
<style scoped></style>
