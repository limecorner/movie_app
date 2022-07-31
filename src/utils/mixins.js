import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

export const clickMoreMethod = {
  methods: {
    clickMore(item) {
      axios
        .get(`${BASE_URL}movie/${item.id}?api_key=${process.env.VUE_APP_apiKey}`)
        .then((response) => {
          const { data } = response;
          this.$emit("after-click-more", data);
        })
        .catch((error) => console.log(error));
    },
  }
}

export const getInfoMixins = {
  computed: {
    getPoster() {
      return this.item.poster_path
        ? `https://image.tmdb.org/t/p/w500/${this.item.poster_path}`
        : "http://fakeimg.pl/440x650/?text=NoImg";
    },
    getTitle() {
      return this.item.title ? this.item.title : "無資料";
    },
    getPopularity() {
      return this.item.popularity ? this.item.popularity : "無資料";
    },
    getVote() {
      return this.item.vote_average ? this.item.vote_average : "無資料";
    },
    // for modal
    getReleaseDate() {
      return this.item.release_date ? this.item.release_date : "無資料";
    },
    // 不能用
    // getGenreName() {
    //   return genre.name ? genre.name : "無資料";
    // },
    getBudget() {
      return this.item.budget ? this.item.budget : "無資料";
    },
    getRevenue() {
      return this.item.revenue ? this.item.revenue : "無資料";
    },
    getOverview() {
      return this.item.overview ? this.item.overview : "無資料";
    },
    getTagline() {
      return this.item.tagline ? this.item.tagline : "無資料";
    },
  }
}