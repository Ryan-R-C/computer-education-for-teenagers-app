

import api from '../index'

export default class UserService {
  static async create(data) {
    // console.log()
    const response = await api
      .post('userScores', data)

      /* .catch(() => {
        servidorErrorMessage()
      }) */

    const mensagemOk = 'User criada com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    // responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data
    return responseData
  }

  //= =========================================================================================================
  static async update(_id, data) {
    const response = await api
      .put(`userScores/${_id}`,data)
      /* .catch(() => {
        servidorErrorMessage()
      }) */
    const mensagemOk = 'User alterada com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    // responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async delete(_id) {
    const response = await api
      .delete(`userScores/${_id}`)
      .then((res) => {
        const status = res.status
        const mensagemOk = 'User apagada com sucesso!'
        const mensagemNaoOK = 'Algo deu errado :('

        // responseHandler(status, mensagemOk, mensagemNaoOK)
      })

      /* .catch(() => {
        servidorErrorMessage()
      }) */

    return response
  }

  //= =========================================================================================================
  static async list() {
    const response = await api
    .get('userScores')
   /* .catch(() => {
        servidorErrorMessage()
      }) */
    console.log( response )
    console.log("response")
    

    const responseData = response.data

    return responseData
  }

  static async listWithFilter(filter, value) {
    const response = await api
      .get(`userScores?filter%5B${filter}%5D=${value}`)
      /* .catch(() => {
        servidorErrorMessage()
      }) */

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async listWithManyFilters(filters) {
    const response = await api
    .get(`userScores?${filters}`)
      /* .catch(() => {
        servidorErrorMessage()
      }) */

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async find(_id) {
    const response = await api
      .get(`userScores/${_id}`)

      /* .catch(() => {
        servidorErrorMessage()
      }) */

    return response.data
  }


  static async findOrCreate(_id, data) {
    let userData;

    try{
      userData = await this.find(_id)
    }
    catch(e){
      if(!userData) userData = await this.create(data)
    }

    return userData
  }

  static async createOrUpdate(data) {
    // console.log()
    const response = await api
      .post('userScores-createOrUpdate', data)

      /* .catch(() => {
        servidorErrorMessage()
      }) */

    const mensagemOk = 'User criada com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    // responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data
    return responseData
  }
}
