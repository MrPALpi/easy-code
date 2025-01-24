import { axiosInstance } from "@/shared/api";

const getCharacters = async (params = {}) => {
  try {
    const response = await axiosInstance.get('/api/character', { params, paramsSerializer: { indexes: null } })

    if (response.status === 200) {
      return response?.data || null;
    }

    return null;

  } catch (error) {
    console.error(error);
    return null;
  }
}

const getCharacterById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/character/${id}`)

    if (response.status === 200) {
      return response?.data || null;
    }

    return null;

  } catch (error) {
    console.error(error);
    return null;
  }
}

export const characterAPI = {
  getCharacters,
  getCharacterById
}