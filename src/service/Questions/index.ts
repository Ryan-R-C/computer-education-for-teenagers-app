import api from '../index'

export default class TaskService {
  static async create(data) {
    const response = await api.post('questions', data)
    const responseData = response.data
    return responseData
  }

  //= =========================================================================================================
  static async update(_id, data) {
    const response = await api.put(`questions/${_id}`, data)

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async delete(_id) {
    const response = await api.delete(`questions/${_id}`)

    return response
  }

  //= =========================================================================================================
  static async list() {
    const response = await api.get('questions')

    const responseData = response.data

    return responseData
  }

  static async listWithFilter(filter, value) {
    const response = await api.get(`questions?filter%5B${filter}%5D=${value}`)

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async listWithManyFilters(filters) {
    const response = await api.get(`questions?${filters}`)
    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async find(_id) {
    const response = await api.get(`questions/${_id}`)

    return response.data
  }
}
