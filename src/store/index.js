import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import loginView from './modules/loginView'

Vue.use(Vuex)

const state = {
  userState: false
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    loginView
  }
})
