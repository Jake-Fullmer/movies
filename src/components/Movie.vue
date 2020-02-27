<template>
  <li class="my-1" @click="setActive">
    <img
      v-if="movieData.poster_path"
      :src="'https://image.tmdb.org/t/p/w500/' + movieData.poster_path"
      alt="Movie Poster"
      height="50"
      width="50"
    />
    <h5>{{ movieData.title }}</h5>
  </li>
</template>

<script>
export default {
  name: "Movie",
  props: ["movieData"],
  methods: {}
};
</script>