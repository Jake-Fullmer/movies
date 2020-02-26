<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Movie Finder</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <movies />
      </div>
      <div class="col">
        <active />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from "@/components/Movies.vue";

export default {
  name: "Home",
  components: {
    Movies,
    Active
  }
};
</script>
