<template>
  <!-- Main container for the page layout -->
  <div class="flex relative justify-center">
    <SideBar
      :visible="sidebarVisible"
      :sidebarHandler="sidebarCloseHandler"
      @closeClicked="openSidebarHandler"
    />
    <div class="w-full min-h-screen">
      <div>
        <Header @menuClicked="openSidebarHandler" />
      </div>
      <div class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full">
        <FindingsReport />
      </div>
      <div class="main-div m-12 pb-2">
        <div
          class="lg:pl-[54px] lg:pr-[63px] md:px-10 px-5 pt-[36px] w-full flex items-center justify-between border-b-2"
        >
          <CommonCustomHeading
            id="repositories"
            :icon="github"
            title="Repositories"
          />
          <div class="flex items-center">
            <div class="me-2 font-medium">Upload Scan</div>
            <div
              style="cursor: pointer"
              class="font-bold bg-primary circle text-white px-1 relative rounded-full"
            >
              <button @click="showModal = true">+</button>
              <!-- Modal -->
              <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-center justify-center min-h-screen">
                  <!-- Background overlay -->
                  <div class="fixed inset-0 bg-gray-500 opacity-75"></div>

                  <!-- Modal content -->
                  <div
                    class="flex-col bg-white text-black rounded-lg relative px-8 py-2"
                  >
                    <div
                      class="flex items-center justify-between gap-24 border-b"
                    >
                      <h1 class="text-xl font-bold border-gray-300 primary-color">
                        Upload Scan
                      </h1>

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

                    <div
                      class="flex items-center justify-between gap-4 my-4 text-black"
                    >
                      <input class="" type="radio" />
                      <h1>Select Repository</h1>
                      <select
                        class="px-24 rounded border-2"
                        name=""
                        id=""
                      ></select>
                    </div>
                    <div class="flex justify-end">
                      <button
                        class="bg-primary rounded-sm px-4 py-0 text-white"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- filter , search , download section -->
        <div
          class="flex justify-between lg:w-full gap-4 items-center px-12 pt-8"
        >
          <div class="flex items-center justify-start gap-8 relative">
            <div class="filter-button p-2">filter</div>
            <div>
              <!-- Search input -->
              <input
                placeholder="Search..."
                class="border border-gray-300 rounded-full px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
              />

              <!-- Search Modal -->
              <div
                class="absolute top-full bg-gray-50 shadow-2xl rounded-sm p-4"
              >
                <div
                  class="primary-color font-bold uppercase text-sm border-b border-gray-300 pb-2"
                >
                  search Filters
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
                    <div class="text-black font-bold ms-2">ID</div>
                    <select
                      class="border border-1 px-8 rounded ms-4"
                      name=""
                      id=""
                    ></select>
                    <select
                      class="border border-1 px-8 rounded ms-4"
                      name=""
                      id=""
                    ></select>
                    <div class="ms-4 font-bold text-gray-500">X</div>
                  </li>
                  <li class="flex items-center justify-between py-2">
                    <div class="text-black font-bold">
                      <input class="me-2" type="radio" />
                      <span>Source</span> <span>Control</span>
                    </div>
                    <div class="flex items-center">
                      <select
                        class="border border-1 px-20 rounded"
                        name=""
                        id=""
                      ></select>
                      <div class="ms-4 font-bold text-gray-500">X</div>
                    </div>
                  </li>
                  <li class="flex items-center justify-between py-2">
                    <div class="text-black font-bold">
                      <input class="me-2" type="radio" />
                      <span>Tags</span>
                    </div>
                    <div class="flex items-center">
                      <select
                        class="border border-1 px-20 rounded"
                        name=""
                        id=""
                      ></select>
                      <div class="ms-4 font-bold text-gray-500">X</div>
                    </div>
                  </li>
                  <li
                    class="flex items-center justify-start py-2 pb-4 border-b border-1"
                  >
                    <div class="text-black font-bold">+</div>
                    <div class="flex items-center ms-1">Add</div>
                  </li>
                </ul>
                <div class="primary-color font-bold uppercase text-sm py-2">
                  clear Filters
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-start gap-8">
            <div class="download-btn p-1">Download</div>
            <div style="color: #8220ff">REFRESH</div>
          </div>
        </div>

        <!-- Repositori table  -->
        <div class="responsive-table mt-8">
          <table>
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
                    class="flex items-center gap-0"
                    v-for="tag in row.id.split(',')"
                  >
                    {{ tag }}
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center gap-0"
                    v-for="tag in row.source.split(',')"
                  >
                    {{ tag }}
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center gap-0"
                    v-for="tag in row.repo.split(',')"
                  >
                    {{ tag }}
                  </button>
                </td>
                <td>
                  <div class="flex items-center">
                    <div class="priority-one px-[28px] z-0"></div>
                    <div class="priority-two px-[16px] -ms-2"></div>
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
                      class="tags-btn z-0 px-[10px]"
                      v-for="tag in row.tags.split(',')"
                    >
                      {{ tag }}
                    </div>
                    <div class="tags-plus px-[12px] -ms-4">
                      <span class="text-end font-bold ps-2">+</span>
                    </div>
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center gap-0"
                    v-for="tag in row.branch.split(',')"
                  >
                    {{ tag }}
                  </button>
                </td>
                <td>
                  <button
                    class="flex items-center view-btn px-[12px] font-medium"
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
              <div
                class="flex-col list-disc ps-2 justify-start absolute w-[120px] right-0 bg-orange-400 shadow-2xl text-white rounded-md py-2 border me-[24rem]"
              >
                <li>Financial</li>
                <li>Insurance</li>
                <li>Energy</li>
              </div>
            </tbody>
          </table>
          <CommonPagination :data="paginatedData" />
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
import { ref, computed, watch } from "vue";
import type SideBar from "~/components/SideBar.vue";
import github from "../../public/assets/Icons/git_hub.svg";
import CustomDropdown from "../components/common/CustomDropdown.vue";

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

// Your existing code continues...

// Define reactive variable for sidebar visibility
const sidebarVisible = ref(false);

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
.responsive-table {
  overflow-x: auto;
  max-width: 100%;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 30%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #d0cef0;
}

.main-div {
  background-color: #fff;
}

.download-btn {
  background-color: #8220ff;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: #0056b3;
}

.filter-button {
  background-color: #8220ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-button:hover {
  background-color: #0056b3;
}

.tags-btn {
  background-color: #f7931a;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: small;
}

.tags-plus {
  background-color: #f7d4b8;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: small;
}

.view-btn {
  background-color: #e0defc;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: small;
}
.priority-one {
  background-color: #03ad3c;
  border-radius: 100px;
  height: 8px;
}
.priority-two {
  background-color: #d6d6d6;
  border-radius: 100px;
  height: 8px;
}
.primary-color {
  color: #8220ff;
}
.bg-primary {
  background-color: #8220ff;
  /* border-radius: 100%; */
}
button.close-modal {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  color: #4a5568;
}

/* Center the modal vertically and horizontally */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Style for the modal content */
.modal-content {
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 30rem;
}
</style>
