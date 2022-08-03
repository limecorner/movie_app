<template>
  <div class="card-container col-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card mb-2">
      <img class="card-img-top" :src="getPoster" alt="Card image cap" />
      <div class="card-body movie-item-body">
        <h5>{{ getTitle }}</h5>
        <div class="container">
          <div class="row">
            <div class="col-1" v-if="isFavorite">
              <font-awesome-icon
                @click="onToggleFavorite(item)"
                icon="fa-solid fa-heart"
                class="favorite"
              />
            </div>
            <div class="col-1" v-else>
              <font-awesome-icon
                @click="onToggleFavorite(item)"
                icon="fa-solid fa-heart"
              />
            </div>

            <!-- rate -->
            <div class="col-1">
              <font-awesome-icon
                icon="fa-regular fa-star"
                class="rate-star"
                @click="onRateStyle(item)"
              />
            </div>
            <div class="col-8 col-lg-7">
              <div
                :class="{ rating: currentRatedMovie.id === item.id }"
                class="rate-text"
              >
                {{ rate > 0 ? rate : "評個分吧!" }}
              </div>
              <input
                :class="{ rating: currentRatedMovie.id === item.id }"
                @keyup.esc="removeRateStyle"
                @blur="removeRateStyle"
                @keyup.enter="rateMovie(item)"
                class="rate-area"
                v-model="rate"
                type="text"
              />
            </div>
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
    currentRatedMovie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFavorite: false,
      rate: -1,
      currentRate: -1,
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
          console.log(response);
        })
        .catch((error) => console.log(error));
    },
    onRateStyle(item) {
      this.$emit("after-on-rate-style", item.id);
      this.currentRate = this.rate;
    },
    removeRateStyle() {
      this.$emit("after-on-rate-style", -1);
      this.rate = this.currentRate;
      this.currentRate = -1;
    },
    rateMovie(item) {
      this.$emit("after-on-rate-style", -1);
      const path = `movie/${item.id}/rating`;
      const data = {
        value: this.rate,
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
          this.rate = data.value;
          console.log(response);
        })
        .catch((error) => {
          this.rate = this.currentRate;
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
            this.rate = data.rated.value;
          }
        })
        .catch((error) => console.log(error));
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