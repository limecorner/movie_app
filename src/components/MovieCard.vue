<template>
  <div class="card-container col-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card mb-2">
      <img class="card-img-top" :src="getPoster" alt="Card image cap" />
      <div class="card-body movie-item-body">
        <h5>{{ getTitle }}</h5>
        <div class="container">
          <div class="d-flex justify-content-around align-items-center">
            <font-awesome-icon
              v-if="isFavorite"
              @click="onToggleFavorite(item)"
              icon="fa-solid fa-heart"
              class="favorite"
            />
            <font-awesome-icon
              v-else
              @click="onToggleFavorite(item)"
              icon="fa-solid fa-heart"
            />

            <!-- rate -->
            <font-awesome-icon
              v-if="isRated"
              icon="fa-solid fa-star"
              class="rate-star rated"
              @click="deleteRate(item)"
            />
            <font-awesome-icon v-else icon="fa-regular fa-star" />
            <star-rating
              class="pb-1"
              v-model="rateInStar"
              @rating-selected="setRating"
              :increment="0.5"
              :star-size="15"
              active-color="#f28500"
              :show-rating="false"
              :inline="true"
            ></star-rating
            >{{ rateInStar > 0 ? rateInStar * 2 : "" }}
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <div>
          <div class="text-left">
            <font-awesome-icon icon="fa-solid fa-ranking-star" />
            {{ getPopularity }}
          </div>
          <div class="text-left">
            <font-awesome-icon icon="fa-solid fa-star" />
            {{ getVote }}
          </div>
        </div>
        <button
          @click="clickMore(item)"
          class="btn btn-show-movie btn-show-movie-card-format"
          data-toggle="modal"
          data-target="#show-movie-modal"
        >
          <!-- More -->
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { clickMoreMethod, getInfoMixins } from "./../utils/mixins";
import { Toast } from "../utils/helpers";
import StarRating from "vue-star-rating";
const BASE_URL = "https://api.themoviedb.org/3/";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

export default {
  components: {
    StarRating,
  },
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
      rateInStar: -1,
      isRated: false,
    };
  },
  created() {
    this.getAccountStates(this.item);
  },
  methods: {
    onToggleFavorite(item) {
      const path = `${BASE_URL}account/${process.env.VUE_APP_account_id}/favorite?api_key=${process.env.VUE_APP_apiKey}&session_id=${process.env.VUE_APP_session_id}`;
      const data = {
        media_type: "movie",
        media_id: item.id,
        favorite: !this.isFavorite,
      };
      axiosInstance
        .post(path, data)
        .then((response) => {
          this.isFavorite = data.favorite;
          if (data.favorite) {
            Toast.fire({
              icon: "success",
              title: "成功",
              text: "加到最愛",
              width: 200,
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "成功",
              text: "移除最愛",
              width: 200,
            });
          }
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    setRating(rating) {
      console.log("rating", rating);
      this.rateInStar = rating;
      this.rateMovie(this.item);
    },
    rateMovie(item) {
      const path = `movie/${item.id}/rating`;
      const data = {
        value: this.rateInStar * 2,
      };
      const config = {
        params: {
          api_key: process.env.VUE_APP_apiKey,
          session_id: process.env.VUE_APP_session_id,
        },
      };
      axiosInstance
        .post(path, data, config)
        .then((response) => {
          console.log(response);
          this.isRated = true;
          Toast.fire({
            icon: "success",
            title: "成功",
            text: "評分",
            width: 170,
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: "失敗",
            text: "評分",
            width: 170,
          });
          console.log(error);
        });
    },
    deleteRate(item) {
      this.rateInStar = 0;
      const path = `${BASE_URL}movie/${item.id}/rating`;
      const config = {
        params: {
          api_key: process.env.VUE_APP_apiKey,
          session_id: process.env.VUE_APP_session_id,
        },
      };
      axios
        .delete(path, config)
        .then(() => {
          this.isRated = false;
          this.rate = -1;
          Toast.fire({
            icon: "success",
            title: "成功",
            text: "移除評分",
            width: 200,
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: "失敗",
            text: "移除評分",
            width: 200,
          });
          console.log(error);
        });
    },
    getAccountStates(item) {
      const path = `${BASE_URL}movie/${item.id}/account_states`;
      const config = {
        params: {
          api_key: process.env.VUE_APP_apiKey,
          session_id: process.env.VUE_APP_session_id,
        },
      };
      axios
        .get(path, config)
        .then((response) => {
          const { data } = response;
          this.isFavorite = data.favorite;
          if (data.rated.value > 0) {
            console.log(data.rated.value);
            this.isRated = true;
            this.rateInStar = data.rated.value / 2;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.card-container {
  padding: 0 10px;
}
.card-img-top:hover {
  z-index: 10;
  animation: scaleUp 1s;
}
@keyframes scaleUp {
  0% {
    transform-origin: bottom;
  }
  100% {
    transform: scale(1.1);
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

.fa-heart,
.rate-star {
  cursor: pointer;
}
.favorite {
  color: red;
}
.rate-text {
  display: block;
}
.rate-text.rating {
  display: none;
}

.rate-area {
  width: 100%;
  display: none;
}

.rate-area.rating {
  display: block;
}
.rated {
  color: #87ceeb;
}
.rated:hover {
  color: #ddd;
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
  .card-container {
    padding: 0 5px;
  }
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