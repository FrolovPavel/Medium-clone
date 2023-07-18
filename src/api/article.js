import axios from '@/api/axios'

const getArticle = async (slug) => {
  const response = await axios.get(`/articles/${slug}`)
  return response.data.article
}

const deleteArticle = async (slug) => {
  return await axios.delete(`/articles/${slug}`)
}

const createArticle = async (articleInput) => {
  const response = await axios.post('/articles', {article: articleInput})
  return response.data.article
}

const updateArticle = async (slug, articleInput) => {
  const response = await axios.put(`/articles/${slug}`, {article: articleInput})
  return response.data.article
}

const addToFavorite = async (slug) => {
  const response = await axios.post(`/articles/${slug}/favorite`)
  return response.data.article
}

const removeFromFavorite = async (slug) => {
  const response = await axios.delete(`/articles/${slug}/favorite`)
  return response.data.article
}

export default {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle,
  addToFavorite,
  removeFromFavorite,
}
