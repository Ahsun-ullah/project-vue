<template>
  <!-- Container for the sticky header -->
  <div
    class="bg-white sticky top-0 z-50 duration-300"
    :class="{ hide: isHeaderHidden }"
  >
    <!-- Padding and positioning for the header content -->
    <div
      class="xl:py-[69.5px] sm:py-10 pb-5 py-7 px-4 md:ps-[54px] md:pr-[63px] relative z-[11]"
    >
      <!-- Purple bar for decoration -->
      <span class="w-screen bg-purple h-[10px] fixed right-0 top-0 z-50"></span>
      <!-- Header content -->
      <div class="flex justify-between items-center sm:gap-5 gap-2">
        <!-- Menu and logo section -->
        <div class="flex items-center gap-4 lg:hidden">
          <!-- Menu icon -->
          <img
            @click="$emit('menuClicked')"
            class="w-5 cursor-pointer"
            src="/assets/Icons/menuHamburger.svg"
            alt="menu"
          />
          <!-- Logo -->
          <a
            href="/"
            class="max-w-[100px] sm:max-w-[150px] min-w-[90px] inline-block"
          >
            <img
              class="w-full"
              src="/assets/Icons/gray_logo.svg"
              alt="page-logo"
            />
          </a>
        </div>
        <!-- Search and action buttons section -->
        <div class="flex justify-between lg:w-full gap-4 items-center">
          <!-- Search input -->
          <div
            class="lg:max-w-[297px] max-w-[100px] sm:max-w-[200px] w-full small:inline-block hidden"
          >
            <CustomInput
              @keydown.enter="handleEnter"
              placeholder="Search"
              id="id"
              name="name"
              type="type"
              searchUrl="/assets/Icons/search.svg"
            />
          </div>
          <div class="relative">
            <div
              class="w-[45px] h-[45px] rounded-full small:hidden border cursor-pointer border-gainsBor bg-ghostWhite flex justify-center items-center"
              @click="isOpen = !isOpen"
            >
              <SearchVue />
            </div>
          </div>
          <!-- SEARCH-BAR POP-UP -->
          <div
            class="mt-5 rounded-lg bg-white py-16 px-4 shadow-[0px_2px_20px_0px_#0000000D] absolute w-[90vw] left-[50%] translate-x-[-50%] small:hidden top-full"
            v-if="isOpen"
          >
            <img
              @click="isOpen = false"
              class="w-5 absolute top-4 right-4 cursor-pointer lg:hidden z-10"
              src="/assets/Icons/cross.svg"
              alt="page-logo"
            />
            <CustomInput
              @keydown.enter="handleEnter"
              placeholder="Search"
              id="id"
              name="name"
              type="type"
              searchUrl="/assets/Icons/search.svg"
            />
          </div>

          <!-- Action buttons -->
          <div class="flex items-center gap-4 lg:gap-8">
            <div class="hidden md:flex items-center gap-4">
              <!-- Email and notification buttons -->
              <button class="hover:scale-[1.08] duration-300">
                <img src="/assets/Icons/email.svg" alt="email" />
              </button>
              <button class="hover:scale-[1.08] duration-300">
                <img
                  src="/assets/Icons/notifications.svg"
                  alt="notifications"
                />
              </button>
            </div>
            <!-- User information and dropdown -->
            <div class="flex items-center gap-2 md:gap-4">
              <div class="hidden lg:block">
                <!-- User name -->
                <p
                  class="font-roboto text-sm font-semibold leading-4 text-lightBlack"
                >
                  Gracetrans
                </p>
                <!-- User handle -->
                <p
                  class="font-roboto text-xsm font-semibold leading-3 text-comet mt-[1px] text-end"
                >
                  @gracetrans
                </p>
              </div>
              <!-- Custom dropdown for user actions -->
              <CustomDropdown
                dropdownPosition="right-0"
                :hidden="true"
                imgUrl="/assets/Icons/profile.svg"
                buttonText="Log Out"
                :icon="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <span
    v-if="isOpen"
    @click="isOpen = false"
    class="h-screen left-0 top-0 absolute w-screen bg-[#00000050] z-10"
  ></span>
</template>

<script setup lang="ts">
// Importing necessary components
import CustomInput from "./common/CustomInput.vue";
import CustomDropdown from "./common/CustomDropdown.vue";
import { ref, onMounted, onUnmounted, watch } from "vue";
import SearchVue from "./icons/Search.vue";
defineProps({
  icon: Array,
});
// Function to handle Enter key press
const handleEnter = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    console.log(inputValue);
  }
};

const isHeaderHidden = ref(false);
let lastScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (
    currentScrollPosition > 100 &&
    currentScrollPosition - lastScrollPosition > 0
  ) {
    isHeaderHidden.value = true;
  } else {
    isHeaderHidden.value = false;
  }

  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  document.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});

const isOpen = ref(false);
watch(isOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }
});
</script>

<style scoped>
/* Add your scoped styles here */
.hide {
  transform: translateY(-100%);
}
</style>
