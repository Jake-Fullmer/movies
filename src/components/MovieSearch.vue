<template>
  <nav class="navbar navbar-dark bg-dark sticky-top">
    <a class="navbar-brand">
      <img src="../assets/the-movies.png" width="60" height="60" alt />
    </a>
    <form class="form-inline my-2 my-lg-0" @submit.prevent="searchMovies(queryString)">
      <input
        class="form-control mr-sm-2"
        name="query"
        type="text"
        placeholder="Search Movies"
        aria-label="Search"
        v-model="queryString"
        required
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script>
export default {
  name: "searchMovies",
  data() {
    return {
      queryString: ""
    };
  },
  methods: {
    searchMovies() {
      this.$store.dispatch("searchMovies", this.queryString);
    }
  }
};
</script>

<style>
.navbar {
  background: rgba(0, 0, 0, 0.7) !important;
}
</style>