import axios from '@/api/axios'

const getPopularTags = async () => {
  const response = await axios.get('/tags')
  return response.data.tags
}

export default {
  getPopularTags,
}
