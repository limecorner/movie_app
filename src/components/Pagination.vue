<template>
  <div class="d-flex justify-content-center mt-3">
    <!-- <paginate
      v-model="currentPage"
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
    </paginate> -->
    <el-pagination
      :current-page="currentPage"
      :page-count="pageCount"
      layout="prev, pager, next"
      background
      @current-change="handleCurrentChange"
    >
    </el-pagination>
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
    pageCount: {
      type: Number,
      required: true,
    },
    filterType: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     childCurrentPage: this.currentPage,
  //     childtotalPages: this.totalPages,
  //   };
  // },
  mounted() {
    this.clickCallback(1, this.year, this.genreId);
  },
  methods: {
    handleCurrentChange(pageNum) {
      this.$emit("after-filter-movies", pageNum, this.year, this.genreId);
    },
    clickCallback(pageNum) {
      console.log("pageNum", pageNum);
      // this.childCurrentPage = pageNum;
      // if (this.filterType === "byYearAndGenre") {
      // this.filterMovies(pageNum, this.year, this.genreId);
      this.$emit("after-filter-movies", pageNum, this.year, this.genreId);
      // } else {
      //   this.filterMoviesByMovieName(this.keyword, pageNum);
      // }
    },
    // filterMovies(page, year, genreId) {
    //   this.isLoading = true;
    //   this.keyword = "";
    //   console.log({ page, year, genreId });
    //   axios
    //     .get(`${BASE_URL}discover/movie`, {
    //       params: {
    //         api_key: process.env.VUE_APP_apiKey,
    //         sort_by: "popularity.desc",
    //         include_video: false,
    //         page,
    //         primary_release_year: year,
    //         with_genres: genreId,
    //       },
    //     })
    //     .then((response) => {
    //       const { data } = response;
    //       this.$emit("after-filter-movies", data.results);
    //       this.childtotalPages = data.total_pages;
    //       this.$router.push({
    //         name: "movies",
    //         query: { year, genreId, page },
    //       });
    //       this.isLoading = false;
    //     })
    //     .catch((error) => {
    //       this.isLoading = false;
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style scoped></style>
