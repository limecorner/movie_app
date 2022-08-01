<template>
  <div>
    <div class="container mt-5" v-if="currentFormat === 'card-format'">
      <div class="row" id="data-panel">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :item="movie"
          @after-click-more="afterClickMore"
          @after-toggle-favorite="afterToggleFavorite"
        />
      </div>
    </div>

    <!-- Modal -->
    <MovieModal :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./../components/MovieCard.vue";
import MovieModal from "./../components/MovieModal.vue";
import { clickMoreMethod, getInfoMixins } from "./../utils/mixins";

const BASE_URL = "https://api.themoviedb.org/3/";

export default {
  mixins: [clickMoreMethod, getInfoMixins],
  components: {
    MovieCard,
    MovieModal,
  },
  data() {
    return {
      movies: [],
      item: {}, // for modal
      currentFormat: "card-format",
    };
  },
  created() {
    this.getFavoriteMovies();
  },
  methods: {
    getFavoriteMovies() {
      axios
        .get(
          `${BASE_URL}account/${process.env.VUE_APP_account_id}/favorite/movies`,
          {
            params: {
              api_key: process.env.VUE_APP_apiKey,
              session_id: process.env.VUE_APP_session_id,
              sort_by: "created_at.desc",
            },
          }
        )
        .then((response) => {
          const { data } = response;
          this.movies = data.results;
        })
        .catch((error) => console.log(error));
    },
    afterClickMore(data) {
      this.item = data;
    },
    afterToggleFavorite(idArray) {
      this.movies = this.movies.filter((movie) => idArray.includes(movie.id));
    },
  },
};
</script>