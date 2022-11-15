

import api from '../index'

export default class TaskService {
  static async create(data) {
    // console.log()
    const response = await api
      .post('options', {
        data,
      })

      /* .catch(() => {
        servidorErrorMessage()
      }) */

    const mensagemOk = 'Task criada com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    // responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data
    return responseData
  }

  //= =========================================================================================================
  static async update(_id, data) {
    const response = await api
      .put(`options/${_id}`, {
        data,
      })
      /* .catch(() => {
        servidorErrorMessage()
      }) */
    const mensagemOk = 'Task alterada com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    // responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async delete(_id) {
    const response = await api
      .delete(`options/${_id}`)
      .then((res) => {
        const status = res.status
        const mensagemOk = 'Task apagada com sucesso!'
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
    .get('options')
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
      .get(`options?filter%5B${filter}%5D=${value}`)
      /* .catch(() => {
        servidorErrorMessage()
      }) */

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async listWithManyFilters(filters) {
    const response = await api
    .get(`options?${filters}`)
      /* .catch(() => {
        servidorErrorMessage()
      }) */

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async find(_id) {
    const response = await api
      .get(`options/${_id}`)

      /* .catch(() => {
        servidorErrorMessage()
      }) */

    return response.data
  }
}
