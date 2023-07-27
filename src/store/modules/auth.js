import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

// TODO разобраться с гетерами нужны ли они

const getters = {
  currentUser: (state) => state.currentUser,
  isLoggedIn: (state) => Boolean(state.isLoggedIn),
}

const mutations = {
  clearValidationErrors(state) {
    state.validationErrors = null
  },
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
  logout(state) {
    state.currentUser = null
    state.isLoggedIn = false
  },
  getCurrentUserStart(state) {
    state.isLoading = true
  },
  getCurrentUserSuccess(state, payload) {
    state.isLoading = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  getCurrentUserFailure(state) {
    state.isLoading = false
    state.isLoggedIn = false
    state.currentUser = null
  },
  updateCurrentUserStart(state) {
    state.isSubmitting = true
  },
  updateCurrentUserSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
  },
  updateCurrentUserFailure(state) {
    state.isSubmitting = false
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
      console.log(`Ошибка авторизации пользователя: ${error.message}`)
    }
  },
  async logout({commit}) {
    await setItem('accessToken', '')
    commit('logout')
  },
  async getCurrentUser({commit}) {
    try {
      commit('getCurrentUserStart')
      const response = await authApi.getCurrentUser()
      commit('getCurrentUserSuccess', response.data.user)
      return response
    } catch (error) {
      commit('getCurrentUserFailure')
      console.log(`Ошибка получения данных пользователя: ${error.message}`)
    }
  },
  async updateCurrentUser({commit}, {currentUserInput}) {
    try {
      commit('updateCurrentUserStart')
      const response = await authApi.updateCurrentUser(currentUserInput)
      commit('updateCurrentUserSuccess', response)
      return response
    } catch (error) {
      commit('updateCurrentUserFailure')
      console.log(`Ошибка обновления данных пользователя: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
