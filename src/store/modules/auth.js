import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

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
    state.isSubmitting = false
    state.validationErrors = payload
  },
  loginStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },

  loginSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },

  loginFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

const actions = {
  async register({commit}, payload) {
    try {
      commit('registerStart')

      const response = await authApi.register(payload)
      await setItem('accessToken', response.data.user.token)

      commit('registerSuccess', response.data.user)

      return response
    } catch (error) {
      commit('registerFailure', error.response.data.errors)

      console.log(`Ошибка регистрации пользователя: ${error.message}`)
    }
  },
  async login({commit}, payload) {
    try {
      commit('loginStart')

      const response = await authApi.login(payload)
      await setItem('accessToken', response.data.user.token)

      commit('loginSuccess', response.data.user)

      return response
    } catch (error) {
      commit('loginFailure', error.response.data.errors)

      console.log(`Ошибка регистрации пользователя: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
