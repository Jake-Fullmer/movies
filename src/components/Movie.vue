<template>
  <li class="m-1 p-1" @click="setActive">
    <img
      v-if="movieData.poster_path"
      :src="'https://image.tmdb.org/t/p/w500/' + movieData.poster_path"
      height="75"
      width="75"
      class="searchImg p-1"
    />
    <h5 class="movie-title">{{ movieData.title }}</h5>
  </li>
</template>

<script>
export default {
  name: "Movie",
  props: ["movieData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActive", this.movieData);
    }
  }
};
</script>
<style>
li {
  background-color: rgba(0, 0, 0, 0.5);
}
.movie-title {
  color: white;
  text-shadow: 2px 2px 2px black;
  text-align: center;
}
</style>