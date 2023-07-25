import axios from '@/api/axios'

const getUserProfile = async (slug) => {
  const response = await axios.get(`/profiles/${slug}`)
  return response.data.profile
}

export default {
  getUserProfile,
}
