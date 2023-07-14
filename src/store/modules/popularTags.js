import popularTagsApi from '@/api/popularTags'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

const mutations = {
  getPopularTagsStart(state) {
    state.isLoading = true
    state.data = null
  },
  getPopularTagsSuccess(state, payload) {
    state.isLoading = false
    state.data = payload
  },
  getPopularTagsFailure(state, payload) {
    state.isLoading = false
    state.error = payload
  },
}

const actions = {
  async getPopularTags({commit}) {
    try {
      commit('getPopularTagsStart')
      const response = await popularTagsApi.getPopularTags()
      commit('getPopularTagsSuccess', response)
    } catch (error) {
      commit('getPopularTagsFailure', error)
      console.log(`Ошибка получения данных популярных тегов: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
