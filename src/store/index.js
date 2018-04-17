import Vue from 'vue'
import Vuex from 'vuex'

import Counter from '../store/modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Counter
  }
})
