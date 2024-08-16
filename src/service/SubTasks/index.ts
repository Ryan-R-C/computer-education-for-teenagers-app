

import api from '../index'

export default class TaskService {
  static async create(data) {
    const response = await api
      .post('subtasks', data)

    const responseData = response.data
    return responseData
  }

  //= =========================================================================================================
  static async update(_id, data) {
    const response = await api
      .put(`subtasks/${_id}`,data)
    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async delete(_id) {
    const response = await api
      .delete(`subtasks/${_id}`)
     
    return response
  }

  //= =========================================================================================================
  static async list() {
    const response = await api
    .get('subtasks')

    const responseData = response.data

    return responseData
  }

  static async listWithFilter(filter, value) {
    const response = await api
      .get(`subtasks?filter%5B${filter}%5D=${value}`)

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async listWithManyFilters(filters) {
    const response = await api
    .get(`subtasks?${filters}`)

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async find(_id) {
    const response = await api
      .get(`subtasks/${_id}`)

    return response.data
  }
}
