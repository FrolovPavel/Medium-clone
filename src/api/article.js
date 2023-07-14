import axios from '@/api/axios'

const getArticle = async (slug) => {
  const response = await axios.get(`/articles/${slug}`)
  return response.data.article
}

const deleteArticle = (slug) => {
  return axios.delete(`/articles/${slug}`)
}

export default {
  getArticle,
  deleteArticle,
}
