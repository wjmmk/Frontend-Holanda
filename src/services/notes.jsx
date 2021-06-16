import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = async() => {
  const request = axios.get(baseUrl)
  return request.then(response => { return response.data })
}

const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, update};