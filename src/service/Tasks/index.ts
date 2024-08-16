import api from '../index'

export default class TaskService {
  static async create(data) {
    const response = await api.post('tasks', data)

    const responseData = response.data
    return responseData
  }

  static async update(_id, data) {
    const response = await api.put(`tasks/${_id}`, data)

    const responseData = response.data

    return responseData
  }

  static async delete(_id) {
    const response = await api.delete(`tasks/${_id}`)

    return response
  }

  static async list() {
    const response = await api.get('tasks')

    const responseData = response.data

    return responseData
  }

  static async listWithFilter(filter, value) {
    const response = await api.get(`tasks?filter%5B${filter}%5D=${value}`)

    const responseData = response.data

    return responseData
  }

  static async listWithManyFilters(filters) {
    const response = await api.get(`tasks?${filters}`)

    const responseData = response.data

    return responseData
  }

  static async find(_id) {
    const response = await api.get(`tasks/${_id}`)

    return response.data
  }

  static async listAssociation(_userId) {
    const response = await api.get(`tasks-score/${_userId}`)

    return response.data
  }
}
