<template>
  <div class="d-flex justify-content-center mt-3">
    <paginate
      v-model="childCurrentPage"
      :page-count="totalPages"
      :click-handler="clickCallback"
      :page-range="3"
      :margin-pages="2"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-link'"
      :next-class="'page-link'"
    >
    </paginate>
  </div>
</template>

<script>
// import axios from "axios";
// const BASE_URL = "https://api.themoviedb.org/3/";

export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    filterType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      childCurrentPage: this.currentPage,
    };
  },
  mounted() {
    this.clickCallback(1, this.year, this.genreId);
  },
  methods: {
    clickCallback(pageNum) {
      console.log("pageNum", pageNum);
      this.$emit("filter-movies", pageNum);
      // this.$emit("filter-movies", pageNum, 2000, 28);
    },
  },
};
</script>

<style scoped></style>
