<template>
  <div>
    <div class="container mt-5" v-if="currentFormat === 'card-format'">
      <div class="row" id="data-panel">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :item="movie"
          @after-click-more="afterClickMore"
          :current-rated-movie="currentRatedMovie"
          @after-on-rate-style="afterOnRateStyle"
        />
      </div>
    </div>

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
      currentRatedMovie: { id: -1 },
    };
  },
  created() {
    this.getRatedMovies();
  },
  methods: {
    getRatedMovies() {
      const path = `${BASE_URL}account/${process.env.VUE_APP_account_id}/rated/movies`;
      const config = {
        params: {
          api_key: process.env.VUE_APP_apiKey,
          session_id: process.env.VUE_APP_session_id,
          sort_by: "created_at.desc",
        },
      };
      axios
        .get(path, config)
        .then((response) => {
          const { data } = response;
          this.movies = data.results;
        })
        .catch((error) => console.log(error));
    },
    afterClickMore(data) {
      this.item = data;
    },
    afterOnRateStyle(itemId) {
      this.currentRatedMovie = { id: itemId };
    },
  },
};
</script>