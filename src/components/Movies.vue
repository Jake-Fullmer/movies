<template>
  <div class="row">
    <div class="col">
      <ul>
        <movie v-for="movieObj in movies" :key="movieObj._id" :movieData="movieObj" />
      </ul>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie.vue";

export default {
  name: "Movies",
  mounted() {
    this.$store.dispatch("searchMovies");
  },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  components: {
    Movie
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
