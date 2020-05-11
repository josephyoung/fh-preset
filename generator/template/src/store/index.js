import Vue from 'vue';
import Vuex from 'vuex';
import root from './root';
import example from './example';

Vue.use(Vuex);

export default new Vuex.Store({
  ...root,
  strict: process.env.NODE_ENV === 'development',
  modules: {
    example,
  },
});
