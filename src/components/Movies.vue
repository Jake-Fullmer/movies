<template>
  <div class="row">
    <div class="col text-center">
      <h3>Movie List</h3>
      <ol>
        <movie v-for="movieObj in movies" :key="movieObj._id" :movieData="movieObj" />
      </ol>
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
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
