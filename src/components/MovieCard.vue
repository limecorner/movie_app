<template>
  <div class="card-container col-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card mb-2">
      <img class="card-img-top" :src="getPoster" alt="Card image cap" />
      <div class="card-body movie-item-body">
        <h5>{{ getTitle }}</h5>
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
      </div>
      <div class="card-footer d-flex justify-content-between">
        <div>
          <div class="text-left">
            <font-awesome-icon icon="fa-solid fa-star" />
            {{ getPopularity }}
          </div>
          <div class="text-left">
            <font-awesome-icon icon="fa-solid fa-thumbs-up" />
            {{ getVote }}
          </div>
        </div>
        <button
          @click="clickMore(item)"
          class="btn btn-show-movie btn-show-movie-card-format"
          data-toggle="modal"
          data-target="#show-movie-modal"
        >
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </button>
      </div>
    </div>
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
.card-img-top:hover {
  z-index: 10;
  /* animation: scaleUp 1s; */
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
  padding: 10px 0 0;
  background-color: black;
}
.card-body h5 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.fa-heart {
  cursor: pointer;
}
.favorite {
  color: red;
}

.card-footer {
  padding: 0 10px 5px;
  background-color: black;
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

@media screen and (min-width: 1200px) {
  .card-footer {
    position: relative;
  }
  .btn-show-movie-card-format {
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
}
</style>