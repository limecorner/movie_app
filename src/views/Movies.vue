<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div
          class="
            col-4 col-md-2 col-lg-2
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <h5 class="web-title">速查電影</h5>
        </div>
        <div class="col-4">
          <select id="year-area" class="w-100" @change="changeQuery($event)">
            <option value="" selected>年份</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
        <div class="col-4">
          <select id="genre-area" class="w-100" @change="changeQuery($event)">
            <option value="" selected>類型</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
        </div>

        <div class="col-6 col-md-4 col-lg-4">
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
        <div id="control-form" class="d-flex col-4 col-md-1 col-lg-1">
          <font-awesome-icon
            class="mr-3"
            icon="fa-solid fa-grip"
            size="2x"
            @click="changeFormat('card-format')"
          />
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

    <paginate
      :page-count="totalPages"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-link'"
      :next-class="'page-link'"
      :force-page="currentPage"
    >
    </paginate>

    <!-- Modal -->
    <MovieModal :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./../components/MovieCard.vue";
import MovieList from "./../components/MovieList.vue";
import MovieModal from "./../components/MovieModal.vue";
import { BreedingRhombusSpinner } from "epic-spinners";

const BASE_URL = "https://api.themoviedb.org/3/";

export default {
  components: {
    BreedingRhombusSpinner,
    MovieCard,
    MovieList,
    MovieModal,
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
  created() {
    this.initilaizeYears(2010);
    this.getGenres();
    this.filterMovies(1, this.year, this.genreId);
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
    clickCallback(pageNum) {
      console.log(pageNum);
      this.currentPage = pageNum;
      if (this.filterType === "byYearAndGenre") {
        this.filterMovies(pageNum, this.year, this.genreId);
      } else {
        this.filterMoviesByMovieName(this.keyword, pageNum);
      }
    },
    initilaizeYears(theLastYear) {
      for (let year = 2022; year >= theLastYear; year--) {
        this.years.push(year);
      }
    },
    changeQuery(e) {
      if (e.target.id === "year-area") {
        this.year = e.target.value;
      } else {
        this.genreId = e.target.value;
      }
      this.filterType = "byYearAndGenre";
      this.currentPage = 1;
      this.filterMovies(this.currentPage, this.year, this.genreId);
    },
    filterMovies(page, year, genreId) {
      this.isLoading = true;
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
          this.totalPages = data.total_pages;
          this.$router.push(
            `/movies?year=${this.year}&genreId=${this.genreId}&page=${page}`
          );
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

/* header */
select,
option {
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
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
  /* width: 500px; */
}
@media screen and (min-width: 350px) {
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
}
</style>