import feedApi from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

const mutations = {
  getFeedStart(state) {
    state.isLoading = true
    state.data = null
  },
  getFeedSuccess(state, payload) {
    state.isLoading = false
    state.data = payload
  },
  getFeedFailure(state, payload) {
    state.isLoading = false
    state.error = payload
  },
}

const actions = {
  async getFeed({commit}, {apiUrl}) {
    try {
      commit('getFeedStart')
      const response = await feedApi.getFeed(apiUrl)
      commit('getFeedSuccess', response.data)
    } catch (error) {
      commit('getFeedFailure', error)
      console.log(`Ошибка получения данных ленты постов: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
