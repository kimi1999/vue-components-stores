import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex)

import tools from './views/tools'

const store = new Vuex.Store({
  modules :{
    tools
  }
})

export default store
