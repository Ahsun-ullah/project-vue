<template>
  <div class="pb-[50px] sm:pb-[81px] sm:pt-10">
    <!-- Custom Heading for all component  -->
    <CommonCustomHeading
      id="software"
      :icon="github"
      title="SOFTWARE SUPPLY CHAIN"
    />
    <!-- Pass the supplyChainCharts array as a prop to the Cards component -->
    <SoftwareCards :chartData="supplyChainChart" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import github from "../../public/assets/Icons/git_hub.svg";

export default defineComponent({
  data() {
    return {
      github: github,
    };
  },
});
</script>
