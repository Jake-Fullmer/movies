<template>
  <div class="home">
    <movie-search />
    <div class="row container-fluid">
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
<style>
/* .home {
  background-image: url("../assets/seats.jpg");
} */
</style>
