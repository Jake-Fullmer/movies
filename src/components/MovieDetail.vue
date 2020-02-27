<template>
  <div class="row">
    <div class="col text-center">
      <div v-if="details.id">
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + details.poster_path"
          width="250"
          class="m-1"
        />
        <h4 class="my-1">
          {{ details.title }}
          <button type="button" class="btn btn-outline-success">Save</button>
        </h4>
        <p>{{ details.overview }}</p>
        <em>
          <p>Released: {{ details.release_date }}</p>
        </em>
        <p>Popularity: {{ details.popularity }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  methods: {},
  computed: {
    details() {
      return this.$store.state.active;
    }
  }
};
</script>
<style scoped>
/* .row {
  background-color: rgba(0, 0, 0, 0.5);
} */
</style>