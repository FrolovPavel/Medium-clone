import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },

  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  registerFailure(state, payload) {
    console.log(payload)
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

const actions = {
  async register({commit}, payload) {
    try {
      commit('registerStart')
      const response = await authApi.register(payload)
      commit('registerSuccess', response.data.user)
    } catch (error) {
      commit('registerFailure', error.response.data.errors)
      console.log(`Ошибка регистрации пользователя: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
