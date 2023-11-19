<template>
  <div>
    <button id="myBtn" @click="topFunction">Top</button>
    <div class="container mt-3">
      <div class="select-wrapper row">
        <div class="col-12 col-sm-6 col-md-4">
          <select
            id="year-area"
            :class="{ 'filter-type': filterType === 'byYearAndGenre' }"
            v-model="year"
          >
            <option value="" selected>年份</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <select
            id="genre-area"
            :class="{ 'filter-type': filterType === 'byYearAndGenre' }"
            v-model="genreId"
          >
            <option value="" selected>類型</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
        </div>
        <div class="col-12 col-sm-8 col-md-4 d-flex justify-content-center">
          <form id="search-form" class="d-flex">
            <input
              id="search-input"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="keyword"
            />
            <button
              @click.prevent="filterMoviesByMovieName(keyword, 1)"
              class="btn btn-outline-success"
              type="submit"
            >
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
        <div
          class="icon-wrapper col-6 col-sm-2 d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon
            class="mr-3"
            icon="fa-solid fa-grip"
            size="2x"
            @click="changeFormat('card-format')"
          />
        </div>
        <div
          class="icon-wrapper col-6 col-sm-2 d-flex align-items-center justify-content-center"
        >
          <font-awesome-icon
            icon="fa-solid fa-list"
            size="2x"
            @click="changeFormat('list-format')"
          />
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="spinner-wrapper">
      <breeding-rhombus-spinner
        :animation-duration="1000"
        :size="65"
        color="#ff1d5e"
      />
    </div>

    <template v-else>
      <!-- card-format -->
      <div class="container mt-5" v-if="currentFormat === 'card-format'">
        <div class="row" id="data-panel">
          <MovieCard
            v-for="movie in movies"
            :key="movie.id"
            :item="movie"
            @after-click-more="afterClickMore"
          />
        </div>
      </div>

      <!-- list-format -->
      <div class="container mt-5" v-else>
        <div class="list-table row align-items-center">
          <tr class="col-4">
            Name
          </tr>
          <tr class="col-1">
            <font-awesome-icon icon="fa-solid fa-heart" />
          </tr>
          <tr class="col-3">
            <font-awesome-icon icon="fa-solid fa-ranking-star" />
          </tr>
          <tr class="col-2">
            <font-awesome-icon icon="fa-solid fa-star" />
          </tr>
          <tr class="col-2">
            More
          </tr>
        </div>
        <MovieList
          v-for="movie in movies"
          :key="movie.id"
          :item="movie"
          @after-click-more="afterClickMore"
        />
      </div>
    </template>

    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :year="year"
      :genreId="genreId"
      :filterType="filterType"
      @filter-movies="filterMovies"
    />
    <!-- Modal -->
    <MovieModal :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./../components/MovieCard.vue";
import MovieList from "./../components/MovieList.vue";
import MovieModal from "./../components/MovieModal.vue";
import Pagination from "@/components/Pagination.vue";
import { BreedingRhombusSpinner } from "epic-spinners";

const BASE_URL = "https://api.themoviedb.org/3/";

export default {
  components: {
    BreedingRhombusSpinner,
    MovieCard,
    MovieList,
    MovieModal,
    Pagination,
  },
  data() {
    return {
      isLoading: true,
      years: [],
      genres: [],
      year: "",
      genreId: "",
      movies: [],
      currentPage: 1,
      item: {}, // for modal
      totalPages: 3,
      currentFormat: "card-format",
      keyword: "",
      filterType: "byYearAndGenre",
    };
  },
  computed: {
    queryPage() {
      return Number(this.$route.query.page);
    },
  },
  watch: {
    queryPage: function (val) {
      this.currentPage = Number(val);
      // this.filterMovies(this.currentPage, this.year, this.genreId);
    },
  },
  created() {
    this.initilaizeYears(2010);
    this.getGenres();
    this.filterMovies(1, this.year, this.genreId);
    window.onscroll = this.scrollFunction;
  },
  methods: {
    getGenres() {
      this.isLoading = true;
      axios
        .get(`${BASE_URL}genre/movie/list`, {
          params: {
            api_key: process.env.VUE_APP_apiKey,
          },
        })
        .then((response) => {
          this.isLoading = false;
          const { data } = response;
          this.genres = data.genres;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
    // clickCallback(pageNum) {
    //   console.log("pageNum", pageNum);
    //   this.currentPage = pageNum;
    //   if (this.filterType === "byYearAndGenre") {
    //     this.filterMovies(pageNum, this.year, this.genreId);
    //   } else {
    //     this.filterMoviesByMovieName(this.keyword, pageNum);
    //   }
    // },
    initilaizeYears(theLastYear) {
      const currentYear = new Date().getFullYear();
      for (let year = currentYear; year >= theLastYear; year--) {
        this.years.push(year);
      }
    },
    filterMovies(page, year, genreId) {
      this.isLoading = true;
      this.keyword = "";
      console.log({ page, year, genreId });
      axios
        .get(`${BASE_URL}discover/movie`, {
          params: {
            api_key: process.env.VUE_APP_apiKey,
            sort_by: "popularity.desc",
            include_video: false,
            page,
            primary_release_year: year,
            with_genres: genreId,
          },
        })
        .then((response) => {
          const { data } = response;
          this.movies = data.results;
          this.currentPage = page;
          this.totalPages = data.total_pages;
          this.$router.push({
            path: "movies",
            query: { year, genreId, page },
          });
          this.isLoading = false;
          // this.totalPages = 10;
          // console.log(this.movies);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
    filterMoviesByMovieName(movieName, page) {
      this.isLoading = true;
      this.currentPage = this.filterType === "byYearAndGenre" ? 1 : page;
      this.filterType = "byMovieName";
      document.querySelector("#year-area").value = "";
      document.querySelector("#genre-area").value = "";
      this.year = "";
      this.genreId = "";
      axios
        .get(`${BASE_URL}search/movie`, {
          params: {
            api_key: process.env.VUE_APP_apiKey,
            query: movieName,
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.isLoading = false;
          const { data } = response;
          this.movies = data.results;
          this.totalPages = data.total_pages;
          // this.totalPages = 10;
          // this.clickCallback(1);
          this.$router.push(
            `movies?keyword=${this.keyword}&page=${this.currentPage}`
          );
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
    afterClickMore(data) {
      this.item = data;
    },
    changeFormat(format) {
      this.currentFormat = format;
      console.log(this.currentFormat);
    },
    scrollFunction() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    },
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>

<style scoped>
.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.select-wrapper {
  position: relative;
}

/* header */
select,
option {
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
}

#year-area.filter-type,
#genre-area.filter-type {
  background-color: #87ceeb;
}

#year-area,
#genre-area,
#search-form {
  width: 80%;
  margin-bottom: 10px;
  background-color: white;
}

.fa-solid {
  width: 40px;
}

.fa-grip,
.fa-list {
  color: #dcdcdc;
  cursor: pointer;
}

.fa-grip:hover,
.fa-list:hover {
  color: white;
}

.web-title {
  padding: 0;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 800;
}

/* list-form */
.list-table {
  border: solid 2px #dcdcdc;
}

tr {
  padding: 10px 0;
}

/* pagination */
.pagination {
  justify-content: center;
  margin-top: 20px;
}
#myBtn {
  display: none;
  position: fixed;
  z-index: 100;
  bottom: 30px;
  right: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: white;
  opacity: 0.7;
  cursor: pointer;
  color: #87ceeb;
}
#myBtn:hover {
  opacity: 1;
  color: blue;
}

@media screen and (min-width: 576px) {
  #search-form,
  #control-form {
    margin-top: 15px;
  }
}

@media screen and (min-width: 768px) {
  #search-form,
  #control-form {
    margin-top: 0px;
  }
  #year-area,
  #genre-area {
    width: 100%;
  }
  .icon-wrapper {
    position: static;
  }
  .fa-grip,
  .fa-list {
    position: absolute;
  }
  .fa-grip {
    top: -50px;
    right: -35px;
  }
  .fa-list {
    top: -10px;
    right: -20px;
  }
  @media screen and (min-width: 768px) {
    #year-area,
    #genre-area,
    #search-form {
      width: 80%;
    }
  }
}
</style>
