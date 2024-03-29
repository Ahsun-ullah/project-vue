<template>
  <!-- Main container for the page layout -->
  <div class="flex relative justify-center">
    <SideBar :visible="sidebarVisible" :sidebarHandler="sidebarCloseHandler" @closeClicked="openSidebarHandler" />
    <div class="w-full">
      <Header @menuClicked="openSidebarHandler" />
      <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full">
        <FindingsReport />
        <TotalFindings />
        <Slsa />
      </div>
      <!-- Second section of content -->
      <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 w-full">
        <SoftwareSupplyChain />
        <Owasp />
      </div>
      <Footer />
    </div>
    <!-- Background overlay for the sidebar -->
    <div @click="sidebarCloseHandler" v-if="sidebarVisible" class="fixed inset-0 bg-black opacity-50 z-50"></div>
  </div>
</template>
<script setup lang="ts">
import type SideBar from '~/components/SideBar.vue';

// Define reactive variable for sidebar visibility
const sidebarVisible = ref(false);

// Function to toggle sidebar visibility
const openSidebarHandler = () => {
  sidebarVisible.value = !sidebarVisible.value;
};

// Function to close sidebar
const sidebarCloseHandler = () => {
  sidebarVisible.value = false;
};

// Watch for changes in sidebar visibility to control body overflow
watch(sidebarVisible, (newValue) => {
  if (newValue) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }
});
</script>
