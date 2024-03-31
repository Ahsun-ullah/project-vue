<template>
  <!-- Main container for the page layout -->
  <div class="flex relative justify-center">
    <SideBar
      :visible="sidebarVisible"
      :sidebarHandler="sidebarCloseHandler"
      @closeClicked="openSidebarHandler"
    />
    <div class="w-full min-h-screen">
      <Header @menuClicked="openSidebarHandler" />
      <div class="bg-white m-12 pb-2">
        <div
          class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full flex items-center justify-between border-b-2"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-12 text-[#8220FF] me-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
              />
            </svg>
            <CommonCustomHeading id="repositories" title="Repositories" />
          </div>

          <div class="flex items-center">
            <div class="me-2 text-black font-medium">Manage Repositories</div>
            <UDropdown
              :items="items"
              :popper="{ arrow: true }"
              class="hover:bg-white bg-white"
            >
              <div
                style="cursor: pointer"
                class="font-bold bg-[#8220ff] rounded-full circle text-whie relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                  />
                </svg>
              </div>
            </UDropdown>
          </div>
        </div>
        <!-- filter , search , download section -->
        <div
          class="flex justify-between lg:w-full gap-4 items-center px-12 pt-8"
        >
          <div class="flex items-center justify-start gap-8 relative">
            <div
              class="flex items-center bg-[#8220ff] p-1 rounded-sm hover:bg-indigo-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 me-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                  clip-rule="evenodd"
                />
              </svg>

              filter
            </div>
            <div>
              <div @click="showModal = true">
                <UInput
                  v-model="q"
                  name="q"
                  class="text-black"
                  color="indigo"
                  placeholder="Search..."
                  icon="i-heroicons-magnifying-glass-20-solid"
                  autocomplete="off"
                  :ui="{ icon: { trailing: { pointer: '' } } }"
                >
                  <template #trailing>
                    <UButton
                      class="cursor-pointer"
                      v-show="q !== ''"
                      color="indigo"
                      variant="link"
                      icon="i-heroicons-x-mark-20-solid"
                      :padded="false"
                      @click="q = ''"
                    />
                  </template>
                </UInput>
              </div>
              <!-- </UDropdown> -->

              <!-- Search Modal -->
              <div
                v-if="showModal"
                class="absolute top-full bg-gray-50 shadow-2xl rounded-sm p-4 mt-[1%]"
              >
                <div
                  class="flex items-center justify-between text-[#8220ff] font-bold uppercase text-sm border-b border-gray-300 pb-2"
                >
                  <div>search Filters</div>
                  <!-- Close button -->
                  <button
                    @click="closeModal"
                    class="text-gray-600 hover:text-gray-900 mt-1"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <ul>
                  <li class="py-2">
                    <label class="text-black font-bold">
                      <input type="radio" />
                      Default
                    </label>
                  </li>
                  <li class="flex items-center justify-between py-2">
                    <input class="me-2" type="radio" />
                    <div class="text-black font-bold">Repository</div>
                    <div class="text-black font-bold mx-2">ID</div>
                    <div class="flex items-center justify-between gap-2">
                      <USelect
                        class="text-black"
                        size="2xs"
                        color="violet"
                        variant="outline"
                        :options="['United States', 'Canada', 'Mexico']"
                      />
                      <USelect
                        size="2xs"
                        color="violet"
                        variant="outline"
                        :options="['United States', 'Canada', 'Mexico']"
                      />
                    </div>

                    <div class="ms-4 font-bold text-gray-500">X</div>
                  </li>
                  <li class="flex items-center justify-between py-2">
                    <input class="me-2" type="radio" />
                    <div class="text-black font-bold me-2">
                      <span>Source</span>
                    </div>
                    <div class="text-black font-bold me-2">
                      <span>Control</span>
                    </div>
                    <div class="flex items-center">
                      <USelect
                        class="text-black ms-2"
                        size="2xs"
                        color="violet"
                        variant="outline"
                        :options="['United States', 'Canada', 'Mexico']"
                      />
                      <div class="ms-4 font-bold text-gray-500">X</div>
                    </div>
                  </li>
                  <li class="flex items-center justify-between py-2">
                    <input class="me-2" type="radio" />
                    <div class="text-black font-bold me-2">
                      <span>Tags</span>
                    </div>
                    <div class="flex items-center">
                      <USelect
                        class="text-black ms-2"
                        size="2xs"
                        color="violet"
                        variant="outline"
                        :options="['United States', 'Canada', 'Mexico']"
                      />
                      <div class="ms-4 font-bold text-gray-500">X</div>
                    </div>
                  </li>
                  <li
                    class="flex items-center justify-start py-2 pb-4 border-b border-1"
                  >
                    <div class="text-black font-bold">+</div>
                    <div class="flex items-center text-black font-bold ms-1">
                      Add
                    </div>
                  </li>
                </ul>
                <div class="text-[#8220ff] font-bold uppercase text-sm py-2">
                  clear Filters
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-start gap-8">
            <div
              class="bg-[#8220ff] p-1 rounded-sm hover:bg-indigo-600 cursor-pointer"
            >
              Download
            </div>
            <div class="flex items-center">
              <div class="text-[#8220ff]">REFRESH</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#8220ff] ms-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Repositori table  -->
        <div class="overflow-x-auto mt-8">
          <table
            class="w-full md:w-min(100% - 30) md:w-1430 mx-auto border-collapse"
          >
            <thead>
              <tr>
                <th v-for="header in headers" :key="header">{{ header }}</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="font-medium" v-for="(row, index) in data" :key="index">
                <td>
                  <button
                    class="flex items-center text-black gap-0"
                    v-for="tag in row.id.split(',')"
                  >
                    {{ tag }}
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center text-black gap-0"
                    v-for="tag in row.source.split(',')"
                  >
                    {{ tag }}
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center text-black gap-0"
                    v-for="tag in row.repo.split(',')"
                  >
                    {{ tag }}
                  </button>
                </td>
                <td>
                  <div class="flex text-black items-center">
                    <div
                      class="bg-[#03ad3c] rounded-xl h-2 px-[28px] z-40"
                    ></div>
                    <div
                      class="bg-[#d6d6d6] rounded-xl h-2 px-[16px] -ms-2 z-30"
                    ></div>
                    <div
                      class="ms-4"
                      v-for="priority in row.priority.split(',')"
                    >
                      {{ priority }}
                    </div>
                  </div>
                </td>
                <td>
                  <button class="flex items-center">
                    <div
                      class="bg-[#f7931a] text-white border-none rounded-lg cursor-pointer transition duration-300 text-sm z-40 px-[10px]"
                      v-for="tag in row.tags.split(',')"
                    >
                      {{ tag }}
                    </div>
                    <div class="flex items-center z-30 bg-orange-200">
                      <UDropdown
                        :items="tagItems"
                        :popper="{ arrow: true }"
                        class="hover:bg-white bg-white"
                      >
                        <ul>
                          <div
                            class="bg-orange-200 text-black border-none rounded-full cursor-pointer transition duration-300 text-sm px-[12px] -ms-4"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              class="w-5 h-5 ps-2 font-bold"
                            >
                              <path
                                d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                              />
                            </svg>
                          </div>
                        </ul>
                      </UDropdown>
                    </div>
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center text-black gap-0"
                    v-for="branch in row.branch.split(',')"
                  >
                    {{ branch }}
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center bg-[#e0defc] hover:bg-blue-300 text-black border-none rounded-lg cursor-pointer transition duration-300 text-sm px-[12px] font-medium"
                    v-for="tag in row.tags.split(',')"
                  >
                    View
                    <!-- Custom dropdown for user actions -->
                    <CustomDropdown
                      dropdownPosition="right-0"
                      :hidden="true"
                      :icon="icon"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex flex-wrap justify-between items-center">
            <div>
              <span class="text-sm leading-5">
                Showing
                <span class="font-medium">{{ "1" }}</span>
                to
                <span class="font-medium">{{ "4" }}</span>
                of
                <span class="font-medium">{{ "08" }}</span>
                results
              </span>
            </div>
          </div>
          <CommonPagination class="text-black" :data="paginatedData" />
        </div>
      </div>

      <Footer />
    </div>
    <!-- Background overlay for the sidebar -->
    <div
      @click="sidebarCloseHandler"
      v-if="sidebarVisible"
      class="fixed inset-0 bg-black opacity-50 z-50"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type SideBar from "~/components/SideBar.vue";
import CustomDropdown from "../components/common/CustomDropdown.vue";

// Define reactive variable for sidebar visibility
const sidebarVisible = ref(false);
const q = ref("");

defineProps({
  icon: Array,
});
// Function to toggle sidebar visibility
const openSidebarHandler = () => {
  sidebarVisible.value = !sidebarVisible.value;
};

// Function to handle Enter key press
const handleEnter = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    console.log(inputValue);
  }
};

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const searchItems = [
  [
    {
      label: " search Filters",
    },
  ],
  [
    {
      label: "Edit",
      icon: "i-heroicons-stop-circle-solid",
      shortcuts: ["E"],
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
      shortcuts: ["D"],
      disabled: true,
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
      shortcuts: ["⌘", "D"],
    },
  ],
];

const data = ref([
  {
    id: "56",
    source: "Github",
    repo: "john@example.com",
    priority: "75",
    tags: "Financial",
    branch: "Master",
  },
  {
    id: "54",
    source: "Github",
    repo: "jane@example.com",
    priority: "25",
    tags: "Insurance",
    branch: "Other",
  },
  {
    id: "51",
    source: "Github",
    repo: "tom@example.com",
    priority: "85",
    tags: "Energy",
    branch: "Main",
  },
]);

const items = [
  [
    {
      label: "Github",
    },
    {
      label: "Gitbucket",
    },
    {
      label: "Gitlance",
    },
  ],
];
const tagItems = [
  [
    {
      label: "Financial",
    },
    {
      label: "Insurance",
    },
    {
      label: "Energy",
    },
  ],
];

// for pagination
const currentPage = ref(1);
const pageSize = 5;
const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.value.slice(startIndex, endIndex);
});

const isOpen = ref(false);
watch(isOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }
});

// Function to close sidebar
const sidebarCloseHandler = () => {
  sidebarVisible.value = false;
};

const headers = ref([
  "REPOSITORY ID",
  "SOURCE CONTROL",
  "REPO",
  "PRIORITY",
  "TAGS",
  "BRANCH",
]);
</script>

<style scoped>
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #d0cef0;
  color: black;
}
</style>
