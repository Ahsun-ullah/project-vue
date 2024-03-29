<template>
  <!-- Input field wrapper -->
  <div>
    <!-- Label for the input -->
    <label class="block font-Poppins font-normal md:text-lg text-base text-lightBlack">
      {{ label }}
    </label>
    <!-- Input field -->
    <div class="relative">
      <input
        class="border border-gainsBor bg-ghostWhite py-[11px] ps-8 pr-4 outline-none rounded-[20px] font-roboto text-comet text-sm leading-4 w-full hover:border-purple duration-300 focus:border-purple"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :id="id"
        :name="name"
      />
      <img :src="searchUrl" alt="searc-icon" class=" absolute top-[10px] left-2">
    </div>
  </div>
</template>

<script lang="ts">
// Exporting the component
export default {
  // Props definition
  props: {
    // Label text for the input
    label: String,
    // Function to handle input change
    onChange: Function,
    // Value of the input field
    value: String,
    // Placeholder text for the input field
    placeholder: String,
    // ID attribute of the input field
    id: String,
    // Name attribute of the input field
    name: String,
    // Flag indicating if there's an error in the input
    error: Boolean,
    // Type of the input field (e.g., text, password)
    type: String,
    searchUrl:String,
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
