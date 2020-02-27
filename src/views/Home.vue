<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Movie Finder</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <movie-search />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <movies />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from "@/components/Movies.vue";
import MovieSearch from "@/components/MovieSearch.vue";

export default {
  name: "Home",
  components: {
    Movies,
    MovieSearch
  }
};
</script>
