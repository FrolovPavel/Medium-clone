import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

const mutations = {
  getArticleStart(state) {
    state.isLoading = true
    state.data = null
  },
  getArticleSuccess(state, payload) {
    state.isLoading = false
    state.data = payload
  },
  getArticleFailure(state, payload) {
    state.isLoading = false
    state.error = payload
  },
  deleteArticleStart(state) {
    state.isLoading = true
    state.data = null
  },
  deleteArticleSuccess(state, payload) {
    state.isLoading = false
    state.data = payload
  },
  deleteArticleFailure(state, payload) {
    state.isLoading = false
    state.error = payload
  },
}

const actions = {
  async getArticle({commit}, {slug}) {
    try {
      commit('getArticleStart')
      const response = await articleApi.getArticle(slug)
      commit('getArticleSuccess', response)
    } catch (error) {
      commit('getArticleFailure', error)
      console.log(`Ошибка получения статьи: ${error.message}`)
    }
  },
  async deleteArticle(_, {slug}) {
    try {
      await articleApi.deleteArticle(slug)
    } catch (error) {
      console.log(`Ошибка удаление статьи: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
