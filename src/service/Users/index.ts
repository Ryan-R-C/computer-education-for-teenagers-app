import api from '../index'

export default class UserService {
  static async create(data) {
    const response = await api.post('users', data)

    const responseData = response.data
    return responseData
  }

  //= =========================================================================================================
  static async update(_id, data) {
    const response = await api.put(`users/${_id}`, data)

    const responseData = response.data

    return responseData
  }

  static async delete(_id) {
    const response = await api.delete(`users/${_id}`)

    return response
  }

  static async list() {
    const response = await api.get('users')

    const responseData = response.data

    return responseData
  }

  static async listWithFilter(filter, value) {
    const response = await api.get(`users?filter%5B${filter}%5D=${value}`)

    const responseData = response.data

    return responseData
  }

  static async listWithManyFilters(filters) {
    const response = await api.get(`users?${filters}`)

    const responseData = response.data

    return responseData
  }

  static async find(_id) {
    const response = await api.get(`users/${_id}`)

    return response.data
  }

  static async findOrCreate(_id) {
    const data = {
      _id,
    }

    let userData = await this.find(_id)

    if (!userData) userData = await this.create(data)

    return userData
  }
}
