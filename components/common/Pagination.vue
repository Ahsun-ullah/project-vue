<template>
  <div class="pagination">
    <button
      class="pagination-btn font-bold"
      :disabled="currentPage === 1"
      @click="currentPage--"
    >
      Previous
    </button>
    <span class="font-bold">{{ currentPage }}</span>
    <button
      class="pagination-btn font-bold"
      :disabled="currentPage === totalPages"
      @click="currentPage++"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const data = ref([]);
const currentPage = ref(1);
const pageSize = 5;
const totalPages = computed(() => Math.ceil(data.value.length / pageSize));
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #f6f5fa;
}

.pagination-btn {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
}
</style>
