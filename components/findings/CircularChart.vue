<template>
  <!-- Container for the chart -->
  <div
    id="chart"
    class="lg:w-[500px] 2xl:w-[600px] small:w-[350px] w-[270px] relative circle_chart"
  >
    <!-- ApexCharts component for displaying the chart -->
    <ClientOnly>
      <VueApexCharts
        type="polarArea"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </ClientOnly>
    <!-- Container for the total value display -->
    <div
      class="lg:w-[132px] lg:h-[132px] small:w-[132px] small:h-[132px] w-[100px] h-[100px] 2xl:w-[180px] 2xl:h-[180px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-[9px]"
    >
      <!-- Container for styling the total value display -->
      <div
        class="p-1.5 bg-[linear-gradient(141.22deg,_rgba(79,_61,_215,_0)_12.34%,_rgba(79,_61,_215,_0.3)_49.64%,_rgba(79,_61,_215,_0)_88.23%)] rounded-full w-full h-full"
      >
        <!-- Inner container for centering text -->
        <div
          class="w-full h-full flex justify-center items-center flex-col bg-white rounded-full"
        >
          <!-- Text displaying 'Total' -->
          <p class="text-comet text-sm font-normal font-roboto">Total</p>
          <!-- Total value -->
          <h3
            class="text-midnightBlue text-base sm:text-xl font-bold font-roboto"
          >
            6.4587
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Vue.js and VueApexCharts
import VueApexCharts from "vue3-apexcharts";

const chartOptions = {
  chart: {
    width: 400,
    height: 300,
    type: "polarArea",
  },
  // Labels for the chart
  labels: findingCircularChartData.labels, // Set labels to an empty array to hide them
  fill: {
    opacity: 1,
    hover: {
      opacity: null, // Set hover opacity to null to prevent color change
    },
    colors: findingCircularChartData.colors,
  },
  stroke: {
    width: 1,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0,
      },
      spokes: {
        strokeWidth: 0,
      },
    },
  },
  // Colors for the chart segments
  colors: findingCircularChartData.colors,
};
const series = findingCircularChartData.series || [];
</script>
<style>
.circle_chart svg path {
  filter: none !important;
}
</style>
