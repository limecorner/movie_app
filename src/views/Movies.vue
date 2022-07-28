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

        <select class="col-2 mr-1" id="year-area" @change="changeYear($event)">
          <option value="" selected>年份</option>
          <option v-for="year in years" :key="year" :value="year">
            <!-- <router-link :to="{ name: 'movies', query: { year } }"> -->
            {{ year }}
            <!-- </router-link> -->
          </option>
        </select>
        <select
          class="col-2 mr-1"
          id="genre-area"
          @change="changeGenre($event)"
        >
          <option value="" selected>類型</option>
          <option v-for="genre in genres" :key="genre.id" :value="genre.id">
            {{ genre.chineseName }}
          </option>
        </select>
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

    <div class="container mt-5" v-if="currentFormat === 'card-format'">
      <div class="row" id="data-panel">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="col-6 col-md-4 col-lg-3 col-xl-2"
        >
          <div class="card mb-2">
            <img
              class="card-img-top"
              :src="
                movie.poster_path
                  ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path
                  : 'http://fakeimg.pl/440x650/?text=No img'
              "
              alt="Card image cap"
            />
            <div class="card-body movie-item-body">
              <h5>{{ movie.title }}</h5>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <div>
                <div class="text-left">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  {{ movie.popularity ? movie.popularity : "無資料" }}
                </div>
                <div class="text-left">
                  <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                  {{ movie.vote_average ? movie.vote_average : "無資料" }}
                </div>
              </div>
              <button
                @click="clickMore(movie)"
                class="btn btn-show-movie btn-show-movie-card-format"
                data-toggle="modal"
                data-target="#show-movie-modal"
              >
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5" v-else>
      <div class="list-table row align-items-center">
        <tr class="col-5">
          Name
        </tr>
        <tr class="col-3">
          <font-awesome-icon icon="fa-solid fa-star" />
        </tr>
        <tr class="col-2">
          <font-awesome-icon icon="fa-solid fa-thumbs-up" />
        </tr>
        <tr class="col-2">
          More
        </tr>
      </div>
      <!-- v-for -->
      <div
        class="list-table row align-items-center"
        v-for="movie in movies"
        :key="movie.id"
      >
        <tr class="col-5 pl-2">
          {{
            movie.title
          }}
        </tr>
        <tr class="col-3">
          {{
            movie.popularity ? movie.popularity : "無資料"
          }}
        </tr>
        <tr class="col-2">
          {{
            movie.vote_average ? movie.vote_average : "無資料"
          }}
        </tr>
        <tr class="col-2">
          <!-- "More" button -->
          <button
            type="button"
            @click="clickMore(movie)"
            class="btn btn-show-movie btn-show-movie-list-format mx-2"
            data-toggle="modal"
            data-target="#show-movie-modal"
          >
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </button>
        </tr>
      </div>
      <!-- v-for -->
    </div>

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
    >
    </paginate>

    <!-- Modal -->
    <div
      class="modal fade"
      id="show-movie-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body" id="show-movie-body">
            <div class="row">
              <div class="col-6">
                <img
                  :src="
                    'https://image.tmdb.org/t/p/w500/' + movieDetail.poster_path
                  "
                  id="show-movie-image"
                />
              </div>
              <div class="col-6">
                <h5 class="modal-title" id="show-movie-title">
                  {{ movieDetail.title }}
                </h5>
                <p class="m-0">發行日 : {{ movieDetail.release_date }}</p>
                <div>
                  <span>類型 : </span>
                  <span
                    v-for="genre in movieDetail.genres"
                    :key="genre.id"
                    class="mr-2"
                    >{{ genre.name }}
                  </span>
                </div>

                <div class="row mt-3">
                  <div class="col-4">
                    <div class="text-center">
                      <font-awesome-icon icon="fa-solid fa-star" />
                      {{
                        movieDetail.popularity
                          ? movieDetail.popularity
                          : "無資料"
                      }}
                    </div>
                    <div class="text-center">
                      <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                      {{
                        movieDetail.vote_average
                          ? movieDetail.vote_average
                          : "無資料"
                      }}
                    </div>
                  </div>
                  <div class="col-8">
                    <div>
                      <p class="text-center m-0">
                        預算
                        {{ movieDetail.budget ? movieDetail.budget : "無資料" }}
                      </p>
                    </div>
                    <div>
                      <p class="text-center m-0">
                        票房
                        {{
                          movieDetail.revenue ? movieDetail.revenue : "無資料"
                        }}
                      </p>
                    </div>
                  </div>
                </div>
                <div id="show-movie-description " class="mt-3">
                  <p class="overview-title text-center m-0">概要</p>
                  <p class="text-center">{{ movieDetail.overview }}</p>
                </div>
                <div id="show-movie-description">
                  <p class="overview-title text-center m-0">標語</p>
                  <p class="text-center">
                    {{ movieDetail.tagline ? movieDetail.tagline : "無資料" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const genres = [
  { id: 28, name: "Action", chineseName: "動作" },
  { id: 12, name: "Adventure", chineseName: "冒險" },
  { id: 16, name: "Animation", chineseName: "動畫" },
  { id: 35, name: "Comedy", chineseName: "喜劇" },
  { id: 80, name: "Crime", chineseName: "犯罪" },
  { id: 99, name: "Documentary", chineseName: "紀錄片" },
  { id: 18, name: "Drama", chineseName: "戲劇" },
  { id: 10751, name: "Family", chineseName: "家庭" },
  { id: 14, name: "Fantasy", chineseName: "奇幻" },
  { id: 36, name: "History", chineseName: "歷史" },
  { id: 27, name: "Horror", chineseName: "恐怖" },
  { id: 10402, name: "Music", chineseName: "音樂" },
  { id: 9648, name: "Mystery", chineseName: "靈異" },
  { id: 10749, name: "Romance", chineseName: "愛情" },
  { id: 878, name: "Science Fiction", chineseName: "科幻" },
  { id: 10770, name: "TV Movie", chineseName: "電視電影" },
  { id: 53, name: "Thriller", chineseName: "驚悚" },
  { id: 10752, name: "War", chineseName: "戰爭" },
  { id: 37, name: "Western", chineseName: "西方" },
];

const apiKey = "70c1033d4e5a041d7597a7d9758e86a6";
const BASE_URL = "https://api.themoviedb.org/3/";

export default {
  data() {
    return {
      years: [],
      genres: [],
      year: "",
      genreId: "",
      movies: [],
      currentPage: 1,
      movieDetail: {},
      totalPages: 3,
      currentFormat: "card-format",
      keyword: "",
      filterType: "byYearAndGenre",
    };
  },
  created() {
    this.initilaizeYears(2010);
    this.genres = genres;
    this.filterMovies(1, this.year, this.genreId);
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
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
    changeYear(e) {
      this.filterType = "byYearAndGenre";
      this.currentPage = 1;
      this.year = e.target.value;
      this.filterMovies(this.currentPage, this.year, this.genreId);
    },
    changeGenre(e) {
      this.filterType = "byYearAndGenre";
      this.currentPage = 1;
      this.genreId = e.target.value;
      this.filterMovies(this.currentPage, this.year, this.genreId);
    },
    filterMovies(page, year, genre) {
      console.log({ page, year, genre });
      axios
        .get(
          `${BASE_URL}discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=false&page=${page}&primary_release_year=${year}&with_genres=${genre}`
        )
        .then((response) => {
          const { data } = response;
          this.movies = data.results;
          this.totalPages = data.total_pages;
          this.$router.push(
            `/movies?year=${this.year}&genreId=${this.genreId}&page=${page}`
          );
          // this.totalPages = 10;
          // console.log(this.movies);
        })
        .catch((error) => console.log(error));
    },
    filterMoviesByMovieName(movieName, page) {
      // console.log({ movieName, page });
      this.filterType = "byMovieName";
      axios
        .get(
          `${BASE_URL}search/movie?api_key=${apiKey}&query=${movieName}&page=${page}`
        )
        .then((response) => {
          const { data } = response;
          this.movies = data.results;
          this.totalPages = data.total_pages;
          // this.totalPages = 10;
          this.$router.push(`movies?keyword=${this.keyword}&page=${page}`);
        })
        .catch((error) => console.log(error));
    },
    clickMore(movie) {
      axios
        .get(`${BASE_URL}movie/${movie.id}?api_key=${apiKey}`)
        .then((response) => {
          const { data } = response;
          // console.log(response);
          // console.log(data);
          this.movieDetail = data;
        })
        .catch((error) => console.log(error));
    },
    changeFormat(format) {
      this.currentFormat = format;
      console.log(this.currentFormat);
    },
  },
};
</script>

<style scoped>
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

/* card */
.card-img-top:hover {
  z-index: 10;
  animation: scaleUp 1s;
}
@keyframes scaleUp {
  0% {
    /* transform: scale(1); */
    transform-origin: bottom;
  }
  100% {
    transform: scale(1.5);
    transform-origin: bottom;
  }
}

.card-body {
  background-color: black;
}
.card-body h5 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.card-footer {
  background-color: black;
}

/* list-form */
.list-table {
  border: solid 2px #dcdcdc;
}

tr {
  padding: 10px 0;
}

/* btn-show-movie */
.btn-show-movie {
  border: solid 2px #dcdcdc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #dcdcdc;
}

.btn-show-movie-card-format {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-show-movie:hover {
  border: solid 2px white;
  color: white;
}

/* modal */
.modal-content {
  background-color: #000;
  color: white;
}

#show-movie-image {
  width: 100%;
}

.modal-title {
  font-weight: 900;
}

.overview-title {
  font-size: 24px;
  font-weight: 800;
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

@media screen and (min-width: 1200px) {
  .card-footer {
    position: relative;
  }
  .btn-show-movie-card-format {
    position: absolute;
    right: 5px;
  }
}
</style>