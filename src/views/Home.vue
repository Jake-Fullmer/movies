<template>
  <div class="home">
    <div class="row mb-2">
      <div class="col">
        <movie-search />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <movies />
      </div>
      <div class="col-6">
        <movie-detail />
      </div>
      <!-- <div class="col-3">
        <my-movies />
      </div>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from "@/components/Movies.vue";
import MovieSearch from "@/components/MovieSearch.vue";
import MovieDetail from "@/components/MovieDetail.vue";

export default {
  name: "Home",
  components: {
    Movies,
    MovieSearch,
    MovieDetail
  }
};
</script>
