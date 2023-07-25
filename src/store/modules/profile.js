import profileApi from '@/api/profile'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

const mutations = {
  getUserProfileStart(state) {
    state.isLoading = true
    state.data = null
  },
  getUserProfileSuccess(state, payload) {
    state.isLoading = false
    state.data = payload
  },
  getUserProfileFailure(state, payload) {
    state.isLoading = false
    state.error = payload
  },
}

const actions = {
  async getUserProfile({commit}, {slug}) {
    console.log('slug', slug)
    try {
      commit('getUserProfileStart')
      const response = await profileApi.getUserProfile(slug)
      commit('getUserProfileSuccess', response)
    } catch (error) {
      commit('getUserProfileFailure', error)
      console.log(`Ошибка получения данных профиля: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
