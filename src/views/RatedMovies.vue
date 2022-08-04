<template>
  <div>
    <div v-if="isLoading" class="spinner-wrapper">
      <breeding-rhombus-spinner
        :animation-duration="1000"
        :size="65"
        color="#ff1d5e"
      />
    </div>

    <template v-else>
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
    </template>

    <MovieModal :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./../components/MovieCard.vue";
import MovieModal from "./../components/MovieModal.vue";
import { clickMoreMethod, getInfoMixins } from "./../utils/mixins";
import { BreedingRhombusSpinner } from "epic-spinners";

const BASE_URL = "https://api.themoviedb.org/3/";

export default {
  mixins: [clickMoreMethod, getInfoMixins],
  components: {
    BreedingRhombusSpinner,
    MovieCard,
    MovieModal,
  },
  data() {
    return {
      isLoading: true,
      movies: [],
      item: {}, // for modal
      currentFormat: "card-format",
    };
  },
  created() {
    this.getRatedMovies();
  },
  methods: {
    getRatedMovies() {
      this.isLoading = true;
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
          this.isLoading = false;
          const { data } = response;
          this.movies = data.results;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
    afterClickMore(data) {
      this.item = data;
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
</style>