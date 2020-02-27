<template>
  <div class="row">
    <div class="col text-center">
      <h1>Movie Details</h1>
      <div v-if="details.id">
        <h3 class="my-1">{{ details.title }}</h3>
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + details.poster_path"
          width="250"
          class="m-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  methods: {},
  computed: {}
};
</script>
