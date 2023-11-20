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
    year: {
      type: [Number, String],
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
    clickMagnifyingGlassTimes: {
      type: Number,
      required: true,
    },
    genreId: {
      type: [Number, String],
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
  // mounted() {
  //   this.clickCallback(1, this.year, this.genreId);
  // },
  methods: {
    clickCallback(pageNum) {
      console.log("pageNum", pageNum);
      if (this.filterType === "byYearAndGenre") {
        this.$emit("filter-movies", pageNum, this.year, this.genreId);
      } else {
        this.$emit("filter-movies-by-movie-name", this.keyword, pageNum);
      }
      // this.$emit("filter-movies", pageNum, this.year, this.genreId);
      // this.$emit("filter-movies", pageNum, 2000, 28);
    },
  },
  watch: {
    year: function (newVal) {
      console.log("子元件 watch year", newVal);
      this.childCurrentPage = 1;
      this.$emit("filter-movies", this.childCurrentPage, newVal, this.genreId);
    },
    genreId: function (newVal) {
      console.log("子元件 watch genreId", newVal);
      this.childCurrentPage = 1;
      this.$emit("filter-movies", this.childCurrentPage, this.year, newVal);
    },
    clickMagnifyingGlassTimes: function (newVal) {
      console.log("子元件 watch clickMagnifyingGlassTimes", newVal);
      this.childCurrentPage = 1;
      this.$emit(
        "filter-movies-by-movie-name",
        this.keyword,
        this.childCurrentPage
      );
    },
  },
};
</script>

<style scoped></style>
