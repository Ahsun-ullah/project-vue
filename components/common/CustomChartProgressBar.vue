<template>
  <div
    class="border border-1 border-lightGainsBor rounded-lg mt-3 sm:mt-6 xl:mt-0"
  >
    <div class="flex justify-center flex-wrap relative pt-3 sm:pt-0">
      <div
        v-for="(value, index) in chartProgressBar"
        :key="index"
        class="w-full sm:w-4/12 p-4 md:p-6 text-center"
      >
        <p
          class="font-poppins text-sm text-midnightBlue flex justify-center items-center gap-1"
        >
          <span
            class="w-[14px] h-[15px] rounded-[5px] block"
            :class="getIndicatorClass(value.title)"
          ></span>
          <span class="opacity-70">{{ value.title }}</span>
        </p>
        <p
          class="font-roboto font-semibold text-midnightBlue text-4xl leading-[42px] mt-3 my-3"
        >
          {{ value.rank }}
        </p>
        <div
          class="bg-lightGainsBor max-w-[272px] w-full h-1 rounded-2xl mx-auto"
          :class="getProgressBarClass(value.title)"
        >
          <span
            :style="{ width: getRankWidth(value.rankPercentage) }"
            class="h-1 rounded-2xl block"
            :class="getIndicatorClass(value.title)"
          ></span>
        </div>
      </div>
      <span
        v-for="position in ['left', 'right']"
        :key="position"
        class="h-[72px] w-[1px] md:block bg-lightGainsBor absolute top-[30px] hidden"
        :class="[position === 'left' ? 'left-[33.5%]' : 'right-[33.5%]']"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const getIndicatorClass = (title: string) => {
  return {
    "bg-lawnGreen": title === "Findings",
    "bg-purple": title === "Ready to remediate",
  };
};

const getProgressBarClass = (title: string) => {
  return {
    "bg-lawnGreen": title === "Findings",
    "bg-lightGainsBor": title === "Ready to remediate",
    hidden: title === "Total Findings",
  };
};

const getRankWidth = (rankPercentage: number) => {
  return `${rankPercentage}%`;
};
</script>
