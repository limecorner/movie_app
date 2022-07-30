<template>
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
              <img :src="getPoster" id="show-movie-image" />
            </div>
            <div class="col-6">
              <h5 class="modal-title" id="show-movie-title">
                {{ getTitle }}
              </h5>
              <p class="m-0">發行日 : {{ getReleaseDate }}</p>
              <div>
                <span>類型 : </span>
                <span v-for="genre in item.genres" :key="genre.id" class="mr-2"
                  >{{ genre.name ? genre.name : "無資料" }}
                </span>
              </div>

              <div class="row mt-3">
                <div class="col-4">
                  <div class="text-center">
                    <font-awesome-icon icon="fa-solid fa-star" />
                    {{ getPopularity }}
                  </div>
                  <div class="text-center">
                    <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                    {{ getVote }}
                  </div>
                </div>
                <div class="col-8">
                  <div>
                    <p class="text-center m-0">
                      預算
                      {{ getBudget }}
                    </p>
                  </div>
                  <div>
                    <p class="text-center m-0">
                      票房
                      {{ getRevenue }}
                    </p>
                  </div>
                </div>
              </div>
              <div id="show-movie-description " class="mt-3">
                <p class="overview-title text-center m-0">概要</p>
                <p class="text-center">{{ getOverview }}</p>
              </div>
              <div id="show-movie-description">
                <p class="overview-title text-center m-0">標語</p>
                <p class="text-center">
                  {{ getTagline }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfoMixins } from "./../utils/mixins";

export default {
  mixins: [getInfoMixins],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
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
</style>