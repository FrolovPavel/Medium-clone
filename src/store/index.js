import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'
import article from '@/store/modules/article'
import profile from '@/store/modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    feed,
    popularTags,
    article,
    profile,
  },
})
