<template>
  <div class="list-table row align-items-center">
    <tr class="col-5 pl-2">
      {{
        getTitle
      }}
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
.list-table {
  border: solid 2px #dcdcdc;
}

tr {
  padding: 10px 0;
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

