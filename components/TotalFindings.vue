<template>
  <!-- Container for the card -->
  <div id="report" class="bg-white px-3 py-6 lg:p-6 rounded-lg mt-2">
    <!-- Header section  -->
    <div class="flex items-center flex-wrap justify-between">
      <!-- Custom chart heading component -->
      <CommonCustomChartHeading iconUrl="/assets/Icons/Item.svg" heading="Total Findings" />
      <div class="inline-block pt-2">
        <div class="border border-1 border-iron pb-[6px] pt-1 px-2 sm:py-[6px] sm:px-3 rounded">
          <!-- Custom dropdown component -->
          <CommonCustomDropdown dropdownPosition="right-[-15px]" :hiddenIcon="true" dropdownText="Last Year"
            textChart="2023" />
        </div>
      </div>
    </div>
    <!-- Chart section -->
    <div class="mt-7 flex items-center justify-between flex-col xl:flex-row overflow- x-hidden">
      <div class="overflow-x-auto w-[300px] min-[500px]:w-[430px] sm:w-full">
        <div class="overflow-x-auto w-[650px] min-[500px]:w-[650px] sm:w-full relative">
          <FindingsFunnelGraph />
        </div>
      </div>
      <!-- Finding circular chart component -->
      <div class="w-full mt-6 lg:mt-0 lg:w-[345px] 2xl:w-[450px] flex justify-center">
        <FindingsCircularChart />
      </div>
    </div>
  </div>
</template>
