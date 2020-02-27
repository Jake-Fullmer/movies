<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand">Movies Now</a>
    <form class="form-inline my-2 my-lg-0" @submit.prevent="searchMovies(queryString)">
      <input
        class="form-control mr-sm-2"
        name="query"
        type="text"
        placeholder="Search"
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
</style>