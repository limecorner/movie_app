<template>
  <div class="card-container col-6 col-md-4 col-lg-3 col-xl-2">
    <div class="card mb-2">
      <img class="card-img-top" :src="getPoster" alt="Card image cap" />
      <div class="card-body movie-item-body">
        <h5>{{ getTitle }}</h5>
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
import { clickMoreMethod, getInfoMixins } from "./../utils/mixins";

export default {
  mixins: [clickMoreMethod, getInfoMixins],
  props: {
    item: {
      type: Object,
      required: true,
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
  padding: 10px 0;
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