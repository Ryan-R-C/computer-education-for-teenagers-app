import api from '../index'

export default class UserService {
  static async create(data) {
    const response = await api.post('userScores', data)

    const responseData = response.data
    return responseData
  }

  static async update(_id, data) {
    const response = await api.put(`userScores/${_id}`, data)

    const responseData = response.data

    return responseData
  }

  static async delete(_id) {
    const response = await api.delete(`userScores/${_id}`)

    return response
  }

  static async list() {
    const response = await api.get('userScores')

    const responseData = response.data

    return responseData
  }

  static async listWithFilter(filter, value) {
    const response = await api.get(`userScores?filter%5B${filter}%5D=${value}`)

    const responseData = response.data

    return responseData
  }

  static async listWithManyFilters(filters) {
    const response = await api.get(`userScores?${filters}`)

    const responseData = response.data

    return responseData
  }

  static async find(_id) {
    const response = await api.get(`userScores/${_id}`)

    return response.data
  }

  static async findOrCreate(_id, data) {
    let userData

    try {
      userData = await this.find(_id)
    } catch (_e) {
      if (!userData) userData = await this.create(data)
      console.error(_e)
    }

    return userData
  }

  static async createOrUpdate(data) {
    const response = await api.post('userScores-createOrUpdate', data)

    const responseData = response.data
    return responseData
  }
}
