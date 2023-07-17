import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null,
  isSubmitting: false,
  validationErrors: null,
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
  createArticleStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  createArticleSuccess(state) {
    state.isSubmitting = false
    state.validationErrors = null
  },
  createArticleFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  updateArticleStart(state) {
    state.isSubmitting = true
  },
  updateArticleSuccess(state) {
    state.isSubmitting = false
  },
  updateArticleFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
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
  async createArticle({commit}, {articleInput}) {
    try {
      commit('createArticleStart')
      const response = await articleApi.createArticle(articleInput)
      commit('createArticleSuccess')
      return response
    } catch (error) {
      commit('createArticleFailure', error.response.data.errors)
      console.log(`Ошибка создания статьи: ${error.message}`)
    }
  },
  async updateArticle({commit}, {slug, articleInput}) {
    try {
      commit('updateArticleStart')
      const response = await articleApi.updateArticle(slug, articleInput)
      commit('updateArticleSuccess')
      return response
    } catch (error) {
      commit('updateArticleFailure', error.response.data.errors)
      console.log(`Ошибка создания статьи: ${error.message}`)
    }
  },
}

export default {
  state,
  mutations,
  actions,
}
