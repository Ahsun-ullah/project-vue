<template>
  <!-- Menu component with dropdown functionality -->
  <Menu as="div" class="relative inline-block text-left z-40">
    <div>
      <!-- Menu button triggering the dropdown -->
      <MenuButton class="flex items-center gap-1 md:gap-4 group">
        <!-- Profile image or fallback text -->
        <div v-if="imgUrl">
          <img :src="imgUrl" alt="profile-img" />
        </div>
        <div class="font-plus-jakarta font-medium text-xs text-black" v-else>
          {{ selectedMenuItem || dropdownText }}
        </div>
        <!-- Chevron icon indicating dropdown toggle -->
        <ChevronDownIcon
          class="size-6 text-comet group-hover:text-purple duration-300"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <!-- Dropdown menu items with transition -->
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        :class="dropdownPosition"
        class="absolute px-3 py-3 mt-2 w-56 origin-top-right max-w-[225px] divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-30"
      >
        <div :class="{ hidden: hiddenIcon }">
          <div class="flex gap-3 md:hidden md:mb-0 mb-[15px]">
            <img
              v-for="(icon, index) in customDropdownIcon"
              :key="index"
              :src="icon"
              alt="icon"
              class="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
            />
          </div>
          <!-- Main button option -->
          <button
            class="text-base font-roboto text-black hover:text-purple duration-300 border-none w-full text-start"
            :disabled="disabled"
            @click="selectMenuItem(buttonText as string)"
          >
            {{ buttonText }}
          </button>
        </div>
        <!-- Additional button option with title -->
        <div class="border-none" :class="{ hidden: hidden }">
          <button
            :disabled="disabled"
            class="text-base font-roboto text-black hover:text-purple duration-300 border-none w-full text-start"
            @click="selectMenuItem(textChart as string)"
          >
            {{ textChart }}
          </button>
          <p class="font-plus-jakarta font-medium text-xs text-black">
            {{ title }}
          </p>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
// Importing necessary components from libraries
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";

// Props definition
defineProps({
  // URL for the profile image
  imgUrl: String,
  // URL for the email icon
  emailUrl: String,
  // URL for the notifications icon
  notificationsUrl: String,
  // Text for the main button
  buttonText: String,
  // Text for the additional button
  textChart: String,
  // Title text
  title: String,
  // Text for the dropdown
  dropdownText: String,
  // Flag indicating if the component is disabled
  disabled: Boolean,
  // Other props...
  // Boolean prop to conditionally hide the element
  hidden: Boolean,
  hiddenIcon: Boolean,
  dropdownPosition: String,
  left: Boolean,
});

// Data
const selectedMenuItem = ref<string | null>(null);

// Method to select menu item
const selectMenuItem = (menuItem: string) => {
  selectedMenuItem.value = menuItem;
};
</script>
