import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  timeout: 3000
});
const defaultParams = {
  api_key: "4a4248f484c96edec8102e2957c5d981",
  page: 1,
  include_adult: false
};

export default new Vuex.Store({
  state: {
    movies: [],
    active: []
  },
  mutations: {
    searchMovies(state, movies) {
      state.movies = movies;
    },
    setActive(state, movie) {
      state.active = movie;
    }
  },
  actions: {
    async searchMovies({ commit }, searchString) {
      try {
        let res = await _api.get("", { params: { query: searchString, ...defaultParams } });
        commit("searchMovies", res.data.results);
      } catch (error) {
        console.error(error);
      }
    },
    setActive({ commit }, movie) {
      commit("setActive", movie)
    }
  },
  modules: {
  }
})
