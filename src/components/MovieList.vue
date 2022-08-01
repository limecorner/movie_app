<template>
  <div class="list-table row align-items-center">
    <tr class="col-4 pl-2">
      {{
        getTitle
      }}
    </tr>
    <tr class="col-1">
      <font-awesome-icon
        v-if="favoriteMoviesIdArray.includes(item.id)"
        @click="onToggleFavorite(item)"
        icon="fa-solid fa-heart"
        class="favorite"
      />
      <font-awesome-icon
        v-else
        @click="onToggleFavorite(item)"
        icon="fa-solid fa-heart"
      />
    </tr>
    <tr class="col-3">
      {{
        getPopularity
      }}
    </tr>
    <tr class="col-2">
      {{
        getVote
      }}
    </tr>
    <tr class="col-2">
      <!-- "More" button -->
      <button
        type="button"
        @click="clickMore(item)"
        class="btn btn-show-movie btn-show-movie-list-format mx-2"
        data-toggle="modal"
        data-target="#show-movie-modal"
      >
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </button>
    </tr>
  </div>
</template>

<script>
import axios from "axios";
import { clickMoreMethod, getInfoMixins } from "./../utils/mixins";
const BASE_URL = "https://api.themoviedb.org/3/";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

export default {
  mixins: [clickMoreMethod, getInfoMixins],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFavorite: false,
      favoriteMoviesIdArray: [],
    };
  },
  created() {
    this.favoriteMoviesIdArray =
      JSON.parse(localStorage.getItem("favorite_key")) || [];
  },
  methods: {
    onToggleFavorite(item) {
      // 前端改愛心顏色
      const isFavorite = this.favoriteMoviesIdArray.includes(item.id)
        ? false // 有此 id，給後端 false
        : true; // 沒此 id，給後端 true
      this.favoriteMoviesIdArray =
        JSON.parse(localStorage.getItem("favorite_key")) || [];
      if (isFavorite) {
        // 沒此 id，推進 []
        this.favoriteMoviesIdArray.push(item.id);
      } else {
        // 有此 id，拿掉此 id
        this.favoriteMoviesIdArray = this.favoriteMoviesIdArray.filter(
          (id) => id !== item.id
        );
        this.$emit("after-toggle-favorite", this.favoriteMoviesIdArray);
      }
      localStorage.setItem(
        "favorite_key",
        JSON.stringify(this.favoriteMoviesIdArray)
      );

      // 後端加入或移除最愛
      const path = `${BASE_URL}account/${process.env.VUE_APP_account_id}/favorite?api_key=${process.env.VUE_APP_apiKey}&session_id=${process.env.VUE_APP_session_id}`;
      const data = {
        media_type: "movie",
        media_id: item.id,
        favorite: isFavorite,
      };
      axiosInstance
        .post(path, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.list-table {
  border: solid 2px #dcdcdc;
}

tr {
  padding: 10px 0;
}

.fa-heart {
  cursor: pointer;
}
.favorite {
  color: red;
}

.btn-show-movie {
  border: solid 2px #dcdcdc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #dcdcdc;
}

.btn-show-movie:hover {
  border: solid 2px white;
  color: white;
}
</style>

